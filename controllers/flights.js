// Import the flight Schema, so we can create the flight object
const res = require('express/lib/response');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

// this is a template we will render when the user visits
// http://localhost:3000/flights/new
function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = dt.toISOString().slice(0, 16)
    res.render('flights/new', { title: 'Add Flight', departsDate });
};

function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;
    // Create the flight object
    const flight = new Flight(req.body);
    
    // Save the flight object
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        // If we save the movie object, then return the user to the index page
        res.redirect('/flights');
    });
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets});
        });
    });
};

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};