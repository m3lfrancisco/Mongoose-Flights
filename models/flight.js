const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: {type: Date, required: true}
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United'], required: true},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: {type: Number, min: 10, max: 9999, required: true},
    departs: {type: Date, default: function() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        return date;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);