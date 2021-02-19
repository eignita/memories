import mongoose from "mongoose";

const memorieSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
  },
  { timestamps: true }
);

const memorie = mongoose.model('memorie', memorieSchema);

export default memorie;