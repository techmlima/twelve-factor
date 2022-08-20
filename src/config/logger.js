const winston = require('winston')
const ecsFormat = require('@elastic/ecs-winston-format')

const logger = winston.createLogger({
  format: ecsFormat(), 
  transports: [
    new winston.transports.Console()
  ]
})

module.exports = logger