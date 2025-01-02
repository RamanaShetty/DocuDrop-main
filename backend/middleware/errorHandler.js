const logger = require("../utils/logger")

const errorHandler = (err, req, res, next) => {
    logger.error(err.stack, err.message)

    const statusCode = err.status || 500
    const message = err.message || "Internal Server Error"

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            // details:
            //     process.env.NODE_ENV === "production" ? undefined : err.stack, // Hide stack trace in production
        },
    })
}

module.exports = errorHandler
