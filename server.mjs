import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import postsRoutes from "./routes/posts.mjs";

dotenv.config();

const app = express();

// Fayl yo‘lini olish (ESM uchun)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Static fayllar (frontend)
app.use(express.static(path.join(__dirname, "public")));

// API routelar
app.use("/api/posts", postsRoutes);

// 🔹 Brauzerda '/' ochilganda index.html ni yuborish
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// MongoDB ulanish
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB ulanishi muvaffaqiyatli"))
  .catch(err => console.log("MongoDB xato:", err));

// Serverni ishga tushurish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server ${PORT}-portda ishlamoqda`));
