const passport = require("passport")

const googleAuth = passport.authenticate("google", {
    scope: ["email", "profile"],
})

const googleAuthCallback = passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/failed",
})

const logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            res.send(err)
        }
        req.session.destroy()
        res.send("logged out")
    })
}

module.exports = {
    googleAuth,
    googleAuthCallback,
    logout,
}
