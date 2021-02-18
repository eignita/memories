import express from 'express';
import { getMemories, createMemorie, updateMemorie, deleteMemorie, likeMemorie } from '../controllers/memorie.js';

import auth from '../middleware/auth.js';

const router = express.Router();
router.get('/', getMemories);
router.post('/', auth, createMemorie);
router.patch('/:id', auth, updateMemorie);
router.patch('/:id/likememory',auth,  likeMemorie);
router.delete('/:id', auth,  deleteMemorie);


export default router;