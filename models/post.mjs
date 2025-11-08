import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  email: { type: String },   // optional
  phone: { type: String }    // optional
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  excerpt: { type: String },
  coverImage: { type: String },
  comments: [commentSchema]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;
