const env = require("../config/env")
const pool = require("../config/db")
const logger = require("../utils/logger")
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
        async function (request, accessToken, refreshToken, profile, done) {
            if (!profile || !profile.emails || !profile.emails[0]) {
                logger.error("Profile does not contain an email")
                return done(null, false, { message: "Email is required" })
            }
            const { displayName, picture, email, id } = profile
            const client = await pool.connect()
            logger.logPoolStatus()
            try {
                const { rows } = await client.query(
                    "select * from users where email=$1",
                    [email]
                )
                if (rows[0]) {
                    return done(null, { displayName, picture, email, id })
                } else {
                    try {
                        const { rows } = await client.query(
                            "insert into users (name,email,google_id,profile_picture) values($1,$2,$3,$4) returning*",
                            [profile.displayName, email,id,picture]
                        )
                        if (rows[0]) {
                            return done(null, {
                                displayName,
                                picture,
                                email,
                                id,
                            })
                        } else {
                            logger.error("Error inserting new user")
                            return done(null, false, {
                                message: "Google Authentication Error",
                            })
                        }
                    } catch (err) {
                        logger.error("Error inserting new user", err)
                        return done(null, false, {
                            message: "Google Authentication Error",
                        })
                    }
                }
            } catch (err) {
                logger.error("Error querying the database:", err)
                return done(null, false, {
                    message: "Google Authentication Error",
                })
            } finally {
                client.release()
                logger.info("finally")
                logger.logPoolStatus()
            }
        }
    )
)

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, user)
    })
})

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})
