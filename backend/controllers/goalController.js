import asyncHandler from "express-async-handler"
import {findGoalsInDB,findGoalByIdInDB,createGoalInDB,updatedGoalInDB,deleteGoalInDB} from "../services/goalServices.js"

// @desc Get All Goals
// @route GET /goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
    const goals=await findGoalsInDB();
    res.status(200).json(goals)
  });
// @desc Set Goal
// @route POST /goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Plese add a text field')
  }
  const newGoal=await createGoalInDB(req.body.text)
  res.status(200).json(newGoal)
  });
// @desc Update Goal
// @route PUT /goals/:id
// @access Private
export const updateGoal= asyncHandler(async (req, res) => {
   const goal= await findGoalByIdInDB(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }
  const newGoalUpdate = await updatedGoalInDB(req.params.id, req.body);
  res.status(200).json(newGoalUpdate)
  });
// @desc Delete Goal
// @route DELETE /goals/:id
// @access Private
export const deleteGoal= asyncHandler(async (req, res) => {
  const goal= await findGoalByIdInDB(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }
  await deleteGoalInDB(req.params.id);
    res.status(200).json({id:req.params.id})
  });