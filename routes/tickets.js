
const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/tickets');

// Render a new ticket form
router.get('/flights/:id/tickets/new', ticketCtlr.new);

// Create a new ticket
router.post('/flights/:id/tickets', ticketCtlr.create);


module.exports = router;