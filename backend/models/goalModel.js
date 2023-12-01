import mongoose from "mongoose";
import { goalSchema } from "../schema/goalSchema.js";

const Goal = mongoose.model("goal", goalSchema);

export { Goal };
