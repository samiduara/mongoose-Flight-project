var Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function (err, flightData) {

        flightData.destinations.push(req.body);

        flightData.save(function (err) {
            res.render('flights/show', {
                flightData
            });

        })
    })
}