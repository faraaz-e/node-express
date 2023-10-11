const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userFirstName: String,
    userLastName: String,
    userEmail: String,
    userPhone: Number,
    userType: String, //  Super Admin / Admin / User
    userDesignation: String, // Software Engineer
    userDept: String, // IT
    userLocation: String, // India
    userCompany: String,
    userStatus: String, //  Active / Inactive
    userPassword: String,
    userSecurityKey: String,
    userCreated: { type: Date, default: Date.now },
    userUpdated: { type: Date, default: Date.now }
})

const userModel = mongoose.model('userModel', userSchema)
module.exports = userModel