const express = require('express');
const router = express.Router();
const contatoController = require('../api/book.api');

router.get('/', contatoController.findAll);

module.exports = router;