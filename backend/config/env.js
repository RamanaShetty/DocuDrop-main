require("dotenv").config()

const PORT = process.env.PORT
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const SESSION_SECRET= process.env.SESSION_SECRET
module.exports = {
    PORT,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    SESSION_SECRET
}
