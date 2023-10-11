const express = require('express')
const { getTasks, getTask, addTask, updateTask, deleteTask } = require('../controller/taskController')

const router = express.Router()

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', addTask)
router.patch('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

module.exports = router