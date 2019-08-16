const express = require('express');
const router= express.Router();
const flightCtlr = require('../controler/flight')

// GET /FLIGHTS/ => "See all the flights"
// ROUTER map to a controller action

router.get('/', flightCtlr.index);

