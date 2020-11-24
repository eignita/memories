import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import memorieRoutes from './routes/memorieRoutes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// http://localhost:5000/memories/
app.use('/memories', memorieRoutes); 
app.use('/', (req, res) => {
  res.write("Hello!! to world of memories. -Dravit");
  res.end();
}); 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error));

// Use below set to not get warnings in the console
mongoose.set("useFindAndModify", false);
