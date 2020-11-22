import mongoose from "mongoose";

const memorieSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    }
  },
  { timestamps: true }
);

const memorie = mongoose.model('memorie', memorieSchema);

export default memorie;