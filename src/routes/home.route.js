const express = require('express');
const router = express.Router();
const home = require('../api/home.api');

router.get('/', home.healthCheck);

module.exports = router;