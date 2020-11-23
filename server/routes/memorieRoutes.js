import express from 'express';
import { getMemories, createMemorie, updateMemorie } from '../controllers/memorie.js';

const memorieRoutes = express.Router();
memorieRoutes.get('/', getMemories);
memorieRoutes.post('/', createMemorie);
memorieRoutes.patch('/:id', updateMemorie);

export default memorieRoutes;