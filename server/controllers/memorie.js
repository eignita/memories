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
  const {title, message, creator, tags, selectedFile} = req.body;  
  const newmemorie = new memorie({title, message, creator, tags, selectedFile});  
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
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No memory with the id ${id}`);
  }
  try {
    const memory = await memorie.findById(id);
    const updatedMemory = await memorie.findByIdAndUpdate(id, {likeCount: memory.likeCount + 1}, {new: true});
    res.status(200).json(updatedMemory);
  } catch (error) {
    console.log(error);
  }
};

