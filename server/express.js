const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const roomRoute = require('./routes/room.route')



const CURRENT_WORKING_DIR = process.cwd()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', roomRoute)


// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

module.exports = app
