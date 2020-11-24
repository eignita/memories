import express from 'express';
import { getMemories, createMemorie, updateMemorie, deleteMemorie, likeMemorie } from '../controllers/memorie.js';

const memorieRoutes = express.Router();
memorieRoutes.get('/', getMemories);
memorieRoutes.post('/', createMemorie);
memorieRoutes.patch('/:id', updateMemorie);
memorieRoutes.patch('/:id/likememory', likeMemorie);
memorieRoutes.delete('/:id', deleteMemorie);


export default memorieRoutes;