// @desc Get All Goals
// @route GET /goals
// @access Private
export const getGoals= async (req, res) => {
    res.status(200).json({message:'Get goals'})
  };
// @desc Set Goal
// @route POST /goals
// @access Private
export const setGoal= async (req, res) => {
     res.status(200).json({message:'Set goals'})
  };
// @desc Update Goal
// @route PUT /goals/:id
// @access Private
export const updateGoal= async (req, res) => {
    res.status(200).json({message:`Update goals ${req.params.id}`})
  };
// @desc Delete Goal
// @route DELETE /goals/:id
// @access Private
export const deleteGoal= async (req, res) => {
    res.status(200).json({message:`Delete goals ${req.params.id}`})
  };