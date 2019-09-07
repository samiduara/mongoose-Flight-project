const express = require('express');
const router = express.Router();
const indexCtlr = require('../controllers/index');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Departing Flights' });
  });

module.exports = router;


