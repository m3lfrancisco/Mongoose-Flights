var express = require('express');
var router = express.Router();

// controller = business logic
const flightsCtrl = require('../controllers/flights');

// GET flights/new 
router.get('/new', flightsCtrl.new);

// To process new flight form data means we need to send the data to the server
// using POST method
router.post('/', flightsCtrl.create);

// GET flights
router.get('/', flightsCtrl.index);

router.get('/:id', flightsCtrl.show);

module.exports = router;
