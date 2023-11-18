
import { Router } from "express";
const goalRoutes = Router();
import {getGoals,setGoal,updateGoal,deleteGoal} from "../controllers/goalController.js"

// Get All Goals + Set Goal
goalRoutes.route('/').get(getGoals).post(setGoal)

// Update Goal
goalRoutes.put("/:id",updateGoal)

// Delete Goal
goalRoutes.delete("/:id",deleteGoal)

export { goalRoutes };