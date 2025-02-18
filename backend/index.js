const app = require('./server.js')
const env = require('./config/env.js')
const logger = require('./utils/logger.js')

app.listen(env.PORT,() => {
    logger.info(`running on http://localhost:${env.PORT}`)
})



