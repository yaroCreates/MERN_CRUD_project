const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel') 
// Get goals
// Get /api/goals
const getGoals =  asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// set goal
// POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ('Please add a text field')
    }
    
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json({message: 'Set goal'})
})

// update goal
// PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// Delete goal
// DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()
    res.status(200).json({id: req.params.id})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}