import express from "express";
import { getMemories, createMemorie } from '../controllers/memorie.js';

const memorieRoutes = express.Router();
memorieRoutes.get("/", getMemories);
memorieRoutes.post("/", createMemorie);

export default memorieRoutes;