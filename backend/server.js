// Library imports
const express = require("express")
const cors = require("cors")
const passport = require("passport")
const session = require("express-session")

// #Module imports
const env = require("./config/env")
const errorHandler = require("./middleware/errorHandler")
require("./config/auth")

const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(
    session({
        secret: env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
)
app.use(passport.authenticate("session"))

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401)
}

const authRoutes = require("./controller/authController")

app.get("/", (req, res) => {
    res.send("<h1>hello</h1> <a href='/auth/google'>Google auth</a> ")
})
app.use("/auth", authRoutes)

app.get("/home", isLoggedIn, (req, res) => {
    res.send(
        `welcome your id ${req.user.id} ${req.user.displayName} your email is ${req.user.email}>`
    )
})
app.get("/test", isLoggedIn, (req, res) => {
    res.send(req.user)
})
app.get("/failed", (req, res) => {
    res.send("<h1>auth failed</h1> ")
})
app.use(errorHandler)
module.exports = app
