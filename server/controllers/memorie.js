import memorie from "../models/memorie.js";

export const getMemories = async (req, res) => {
  try {
    const memories = await memorie.find();
    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMemorie = async (req, res) => {
  const {title, message, creator, tags, selectedFile} = req.body;  
  const newmemorie = new memorie({title, message, creator, tags, selectedFile});  
  try {
    await newmemorie.save();
    res.status(201).json(newmemorie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
