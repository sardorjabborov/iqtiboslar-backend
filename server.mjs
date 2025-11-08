import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import postsRoutes from "./routes/posts.mjs";
import subscribersRoutes from "./routes/subscribers.mjs";

dotenv.config();

const app = express();

// __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public"))); // frontend

// Routes
app.use("/api/posts", postsRoutes);
app.use("/api/subscribers", subscribersRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB ulanishi muvaffaqiyatli"))
  .catch(err => console.log("MongoDB xato:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda`));
