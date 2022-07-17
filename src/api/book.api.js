const db = require('../config/db')
const logger = require('../config/logger')

exports.findAll =  async (req, res) => {
    db.query('SELECT * FROM book', (err, rows) => {
        if (err) logger.error(err)

        logger.info(`Number of Books (${rows.length})`)
        res.status(200).json(rows)
    })
}