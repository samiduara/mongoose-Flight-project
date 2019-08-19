
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flights: flight._id }, function(err, tickets) {
            res.render('flights/show', {
                title: 'Flight Detail',
                flight,
                tickets
            });
        })
    });
}

function newFlight(req, res) {
    res.render('flights/new'); 
}

function create(req, res) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Flight.create(req.body, function(err, flight) {
        console.log(flight);
        res.redirect('/flights');
    });
}