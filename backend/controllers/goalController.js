const asyncHandler = require('express-async-handler')
// Get goals
// Get /api/goals
const getGoals =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// set goal
// POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
})

// update goal
// PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// Delete goal
// DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}