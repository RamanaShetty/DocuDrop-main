
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res,next) => {
    const statusCode = err.status || 500
    const message = err.message || "Internal Server Error"

    res.status(statusCode).json({
        success: false,
        error: {
            message,
        },
        details:
            process.env.NODE_ENV === "production" ? undefined : err.stack,
    })
}

module.exports = errorHandler
