import express from "express";
import {getPosts} from '../controllers/posts.js';
const postrouter = express.Router();
postrouter.get("/", getPosts);
export default postrouter;