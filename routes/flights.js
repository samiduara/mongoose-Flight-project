const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');


router.get('/', flightCtlr.index); 

// GET /flights/new => renders the flight form to the client so a flight can then be created

router.get('/new', flightCtlr.new);

// POST /flights => take form data (data payload) and then have mongoose/mongoDB create a document

router.post('/', flightCtlr.create);

module.exports = router;