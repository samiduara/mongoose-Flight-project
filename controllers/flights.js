const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
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