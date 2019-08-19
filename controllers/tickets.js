const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};


function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', { flight });
    });
}   

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.create(req.body, function(err, ticket) {
            ticket.flights.push(flight._id);
            ticket.save(function(err, ticket) {
                res.redirect(`/flights/${flight._id}`);
            });
        });
    });
}