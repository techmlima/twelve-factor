var db = require('../config/db');

exports.findAll =  async (req, res) => {
    db.query('SELECT * FROM book', (err, rows) => {
        if (err) throw err

        res.status(200).json(rows)
    })
}