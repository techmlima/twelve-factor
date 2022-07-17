const winston = require('winston');

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'twelve-factor.log' })
    ]
});

module.exports = logger