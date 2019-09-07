const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination,
    delete: deleteFlight
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flights: flight._id }, function(err, tickets) {
            console.log(tickets)
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

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err, flight) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}


function deleteFlight(req, res) {
    Flight.findById(req.params.id, function(err, flightId) {
        Flight.deleteOne({_id: flightId._id}, function(err) {
            console.log(flightId);
            console.log(req.params.id)
            res.redirect('/flights');
        });
    });
}