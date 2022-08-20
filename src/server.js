const http = require('http')
const app = require('./app')
const logger = require('./config/logger')
const db = require('./config/db')
const { port } = require('./config')

const server = http.createServer(app)

server.listen(port || 3001, () => logger.info(`Started on port ${port}`))

process.on('SIGTERM', () => {
    logger.info(`SIGTERM signal received`)
   
    server.close(() => {
        logger.info(`DB connection closed.`)
        db.destroy()

        logger.info(`Http server closed.`)
        process.exit(0)
    })
})