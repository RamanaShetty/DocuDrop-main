const info = (info, infoMessage = "") => {
    console.log(info, infoMessage)
}
const error = (error, errorMessage = "") => {
    console.error(error, errorMessage)
}
module.exports = {
    info,
    error,
}
