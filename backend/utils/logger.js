const info = (info, infoMessage = "") => {
    console.log(info, infoMessage)
}
const error = (error, errorMessage = "") => {
    console.error(error, errorMessage)
}
const pool = require("../config/db") // Your PostgreSQL pool setup

function logPoolStatus() {
    console.log(`Total Clients: ${pool.totalCount}`)
    console.log(`Idle Clients: ${pool.idleCount}`)
    console.log(`Waiting Clients: ${pool.waitingCount}`)
}
module.exports = {
    info,
    error,
    logPoolStatus,
}
