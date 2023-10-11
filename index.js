require('dotenv').config()
const Joi = require('joi')
const express = require('express')
const app = express()
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')
var cors = require('cors')

app.use(cors()) //for cross-origin issue

//DB Connection
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

app.use(express.json()) // middleware for parsing incoming request (eg. bodyParser)

app.use('/api', taskRoutes)
app.use('/api', userRoutes)


const port = process.env.PORT || 3000 //setting environment variable to dynamically assign port by hosting environment
app.listen(port, () => console.log(`Listening to port ${port}...`))