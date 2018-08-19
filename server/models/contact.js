const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    occupation: {
        required: true,
        type: String
    },
    avatar: {
        required: true,
        type: String
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;