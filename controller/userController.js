const userModel = require('../models/userModel')

const getUsers = async (req, res) => {
    try {
        const data = await userModel.find().sort( { userCreated : -1 } )
        res.json(data)
    }catch (error) {
        res.status(500).json( {message: error.message} )
    }
}

const getUser = async (req, res) => {
    try {
        const data = await userModel.findById(req.params.id)
        res.json(data)
    }catch (error) {
        res.status(500).json( {message: error.message} )
    }
}

const addUser = async (req, res) => {

    const data = new userModel({
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone,
        userType: req.body.userType,
        userDesignation: req.body.userDesignation,
        userDept: req.body.userDept,
        userLocation: req.body.userLocation,
        userCompany: req.body.userCompany,
        userStatus: req.body.userStatus,
        userPassword: req.body.userPassword,
        userSecurityKey: req.body.userSecurityKey
    })

    try {
        const userData = await data.save()
        res.status(200).json(userData)
    }catch (error){
        res.status(400).json( {message: error.message} )
    }
}

const updateUser = async (req, res) => {
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = {new: true}
        const result = await userModel.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    }catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

const deleteUser = async (req, res) => {
    try{
        const id= req.params.id
        const result = await userModel.findByIdAndDelete(id)
        res.json( { message: "User with id: "+ result.id + " has been deleted." } )
    }catch (error) {
        res.status(400).json( {message: error.message } )
    }
}

module.exports = { getUser, getUsers, addUser, updateUser, deleteUser }