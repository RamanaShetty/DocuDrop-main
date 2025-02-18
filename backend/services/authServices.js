
const passport = require("passport")

const googleAuth = passport.authenticate("google", {
    scope: ["email", "profile"],
})

const googleAuthCallback = passport.authenticate("google", {
    successRedirect: `/home`,
    failureRedirect: "/failed",
})

const logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            res.send(err)
        }
        req.session.destroy(() => {
            res.redirect("/")
        })
    })
}

const auth = (req, res) => {
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.status(401).json({ message: "Not authenticated" })
    }
}
module.exports = {
    googleAuth,
    googleAuthCallback,
    logout,
    auth,
}
