import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import memorieRoutes from './routes/memorieRoutes.js';

const app = express();
// http://localhost:5000/posts/
app.use('/memories', memorieRoutes); 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://mongodb:mongodb123@dev.vusud.mongodb.net/learn?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));

// Use below set to not get warnings in the console
mongoose.set("useFindAndModify", false);
