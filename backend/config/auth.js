const env = require("../config/env")

const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth2").Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            callbackURL: `http://localhost:5000/auth/google/callback`,
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            const { displayName, picture, email, id } = profile
            return done(null, { displayName, picture, email, id })
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})
