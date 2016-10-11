'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const messages = require('./controller.js');

const router = express.Router();

router.get('/messages', messages.getLast);
router.post('/messages', bodyParser.urlencoded({ extended: false }), messages.post);

module.exports = router;
