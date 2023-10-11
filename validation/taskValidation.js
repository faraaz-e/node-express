const express = require('express')
const Joi = require('joi')

const taskValidationSchema = Joi.object().keys({
    taskTitle: Joi.string().min(3).max(100).required()
})

module.exports = taskValidationSchema