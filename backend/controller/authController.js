const authRoutes = require("express").Router()
const authServices = require("../services/authServices")

authRoutes.get("/google", authServices.googleAuth)
authRoutes.get("/google/callback", authServices.googleAuthCallback)
authRoutes.get("/logout", authServices.logout)
authRoutes.get('/user',authServices.auth)
module.exports = authRoutes
