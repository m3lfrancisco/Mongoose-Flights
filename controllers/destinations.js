const Flight = require('../models/flight');

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // Push subdocs into Mongoose arrays
        flight.destinations.push(req.body);
        // Save any changes made to the flight doc
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
};

module.exports = {
    create
};