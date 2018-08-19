const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    year: {
        required: true,
        type: String
    },
    make: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;