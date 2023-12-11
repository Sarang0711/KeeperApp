const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv').config()
const path = require('path')
const cors = require('cors')

//? config() => Loads .env file contents into process.env by default

const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://sarangshelke7070:Sarang7070@cluster0.tinfeta.mongodb.net/?retryWrites=true&w=majority')
      console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error) {
      console.log(`Error occured: ${error.message}`)
      process.exit(1)
    }
  }

connectDB()

// Creating the server
const app = new express()

app.use(cors())

app.use(express.json())
// middleware that indicates that data being send in json format
app.use(express.urlencoded({extended: false}))
// middleware will parse data that doesn't support nested obj or arrays in the form data


const notesRoute = require('./routes/notes')
app.use('/notes', notesRoute)

// Serving Frontend
if(process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
}
app.listen(PORT, () => {
    console.log("Server running on port 5000")
})