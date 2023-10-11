const express = require('express')
const { getUsers, getUser, addUser, updateUser, deleteUser } = require('../controller/userController')

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router