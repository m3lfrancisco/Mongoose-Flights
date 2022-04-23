// Import the flight Schema, so we can create the flight object
const Flight = require('../models/flight');

function newFlight(req, res) {
    // this is a template we will render when the user visits
    // http://localhost:3000/flights/new
    res.render('flights/new');
};

function create(req, res) {
    // Create the flight object
    const flight = new Flight(req.body);
    
    // Save the flight object
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        console.log(flight);
        // If we save the movie object, then return the user to the index page
        res.redirect('/flights');
    });
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        })
    });
};

module.exports = {
    new: newFlight,
    create,
    index
};