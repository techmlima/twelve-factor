const express = require('express');
const app = express();

//carrega as rotas
app.use('/books', require('./routes/book.route'));
app.use('/', require('./routes/home.route'));

module.exports = app;