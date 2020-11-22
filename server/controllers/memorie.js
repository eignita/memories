import memorie from "../models/memorie.js";

export const getMemories = async (req, res) => {
  try {
    const memories = await memorie.find();
    console.log(res.json);
    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMemorie = async (req, res) => {
  const newmemory = req.body;
  const newmemorie = new memorie(newmemory);
  try {
    await newmemorie.save();
    res.status(201).json(newmemorie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
