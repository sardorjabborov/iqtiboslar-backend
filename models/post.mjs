import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  excerpt: String,
  coverImage: String,
  comments: [commentSchema],
}, { timestamps: true });

export default mongoose.model("Post", postSchema);

