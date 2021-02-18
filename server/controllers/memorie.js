import mongoose from "mongoose";
import memorie from "../models/memorie.js";

export const getMemories = async (req, res) => {
  try {
    const memories = await memorie.find();
    res.status(200).json(memories);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createMemorie = async (req, res) => {
  const post = req.body;  
  const newmemorie = new memorie({ ...post, creator: req.userId, createdAt: new Date().toISOString() });  
  try {
    await newmemorie.save();
    res.status(201).json(newmemorie);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const updateMemorie = async (req, res) => {
  const { id } = req.params;
  const memory = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No memory with the id ${id}');
  }
  try {
    const updatedMemory = await memorie.findByIdAndUpdate(id, memory, {new: true});
    res.status(200).json(updatedMemory);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
  
};

export const deleteMemorie = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No memory with that id');
  }
  try {
    await memorie.findByIdAndRemove(id);
    res.status(200).json(id)    
  } catch (error) {
    console.log(error);   
    res.status(409).json({ message: error.message }); 
  }  
};

export const likeMemorie = async (req, res) => {
  const { id } = req.params;

  if(!req.userId) return res.status(400).json({ message: "Unauthenticated"});

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No memory with the id ${id}`);
  }
  try {
    const memory = await memorie.findById(id);

    const index = memory.likes.findIndex((id) => id === String(req.userId));

    if(index === -1) {
      // like the post
      memory.likes.push(req.userId);
    } else {
      //dislike post 
      memory.likes = memory.likes.filter((id) => id !== String(req.userId));
    }
    memory.likeCount = memory?.likes.length;
    const updatedMemory = await memorie.findByIdAndUpdate(id, memory, {new: true});
    res.status(200).json(updatedMemory);
  } catch (error) {
    console.log(error);
  }
};

