const { Pool } = require("pg")
const { DEVELOPMENT_DATABASE_URL } = require("./env")

const pool = new Pool({
    connectionString:DEVELOPMENT_DATABASE_URL,
})

module.exports = pool
