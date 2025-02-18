// Library imports
const express = require("express")
const cors = require("cors")
const passport = require("passport")
const session = require("express-session")

// #Module imports
const env = require("./config/env")
const errorHandler = require("./middleware/errorHandler")
require("./config/auth")
const authRoutes = require("./controller/authController")
const isLoggedIn = require("./middleware/authentication")
const pool = require("./config/db")

const app = express()

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:5173", // Update based on your frontend
        credentials: true, // Allow sending session cookies
    })
)
app.use(
    session({
        secret: env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        },
    })
)

app.use(passport.authenticate("session"))

app.get("/", (req, res) => {
    res.send("<h1>hello</h1> <a href='/auth/google'>Google auth</a> ")
})

app.use("/auth", authRoutes)

app.get("/home", isLoggedIn, (req, res, next) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                user: req.user,
            },
        })

    } else {
        next(req.user)
    }
})
app.get("/test", async (req, res, next) => {
    try {
        const result = await pool.query("select * from users")
        res.send(result.rows)
    } catch (err) {
        next(err)
    }
})
app.get("/failed", (req, res) => {
    console.log(req.user)
    res.send(
        'Google Auth failed'
    )
})
app.use(errorHandler)
module.exports = app
