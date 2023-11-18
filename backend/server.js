import express from "express"; 
import dotenv from "dotenv";

import { goalRoutes } from "./routes/goalRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// handle url encoded
app.use(express.urlencoded({ extended: false }));
// handale parsing json
app.use(express.json());

app.use("/goals", goalRoutes);

app.listen(PORT, (error) => {
    if (error) console.error("Error: ", error);
    console.log("SERVER IS UP AND RUNNING ON PORT ", PORT);
  });