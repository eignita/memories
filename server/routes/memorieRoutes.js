import express from 'express';
import { getMemories, createMemorie, updateMemorie, deleteMemorie } from '../controllers/memorie.js';

const memorieRoutes = express.Router();
memorieRoutes.get('/', getMemories);
memorieRoutes.post('/', createMemorie);
memorieRoutes.patch('/:id', updateMemorie);
memorieRoutes.delete('/:id', deleteMemorie);

export default memorieRoutes;