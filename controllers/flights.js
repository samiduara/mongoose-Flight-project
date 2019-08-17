var Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flights){
        res.render('flights/show', { title: "Flight Detail", flights });
})
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');

    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
}