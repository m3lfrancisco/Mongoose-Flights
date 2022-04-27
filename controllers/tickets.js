const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function create(req, res) {
    flightId = req.params.id
    req.body.flight = flightId;
        Ticket.create(req.body, function(err, ticket) {
            res.redirect(`/flights/${flightId}`);
    });
};

function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id});
};