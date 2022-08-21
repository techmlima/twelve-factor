const db = require('../config/db')
const logger = require('../config/logger')

exports.findAll =  async (req, res) => {
    db.query('SELECT * FROM book', (err, rows) => {
        if (err) {
            logger.error(err)
            res.status(500).send({ message: 'Error during select books' })
            return;
        }

        logger.info(`Number of Books (${rows.length})`)
        res.status(200).json(rows)
    })
}