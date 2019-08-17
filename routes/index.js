const express = require('express');
const router = express.Router();
const indexCtlr = require('../controllers/index');

router.get('/', indexCtlr.index);

module.exports = router;
