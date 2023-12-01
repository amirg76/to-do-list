import { Goal } from "../models/goalModel.js";

export const findGoalsInDB = async () => {
    const goals = Goal.find();
    return await goals;
  };
  export const findGoalByIdInDB = async (id) => {
    const goal = Goal.findById(id);
    return await goal;
  };

export const createGoalInDB = async (text) => {
    const newGoal = Goal.create({text:text});
    return await newGoal;
};

export const updatedGoalInDB = async (paramsId, body) => {
    const updateGoal = Goal.findByIdAndUpdate(
      paramsId,
      {
        $set: body,
      },
      { new: true }
    );

return await updateGoal;
};

export const deleteGoalInDB = async (paramsId) => {
    const deleteGoal = Goal.findByIdAndDelete(paramsId);
    return await deleteGoal;
  };