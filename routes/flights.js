const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');


router.get('/', flightCtlr.index); 

// GET /flights/new 
router.get('/new', flightCtlr.new);

// POST /flights 

router.post('/', flightCtlr.create);
router.get("/:id",flightCtlr.show);




module.exports = router
