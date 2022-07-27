const winston = require('winston');

const day = new Date().toJSON().slice(0,10);
const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `logs/twelve-factor_${day}.log` })
    ]
});

module.exports = logger