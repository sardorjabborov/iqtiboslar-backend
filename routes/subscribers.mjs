import express from "express";
import Subscriber from "../models/subscriber.mjs";

const router = express.Router();

// POST new subscriber
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) return res.status(400).json({ success: false });

    await Subscriber.create({ name, email, phone });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
