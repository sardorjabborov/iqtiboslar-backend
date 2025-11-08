import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  excerpt: { type: String, required: true },
  coverImage: { type: String, required: true },
  comments: [commentSchema]
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
