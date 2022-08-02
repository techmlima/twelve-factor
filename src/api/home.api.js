const logger = require('../config/logger')

exports.healthCheck =  async (req, res) => {
    const message = 'Twelve-Factor App alive';
    logger.info(message)
    res.status(200).send(message);
}