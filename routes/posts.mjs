import express from "express";
import Post from "../models/post.mjs";

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Postlarni olishda xato" });
  }
});

// POST new comment
router.post("/:id/comments", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ success: false });

    const { user, comment } = req.body;
    if (!user || !comment) return res.status(400).json({ success: false });

    post.comments.push({ user, comment });
    await post.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
