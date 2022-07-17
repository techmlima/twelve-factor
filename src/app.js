const express = require('express');
const app = express();

//carrega as rotas
app.use('/books', require('./routes/book.route'));

module.exports = app;