const flight = require(' ../model/flight')

module.exports = {
    index
};


function index (req, res)
flight.find({}, function(err, flights) {
    res.render('flights/index', {flights});
});
