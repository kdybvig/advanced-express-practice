const Contact = require('../models/Contact');

module.exports.list = (req, res) => {
    Contact.find({}, (err, contacts) => {
        if (err) res.send(err);
        res.json(contacts);
    });   
}

module.exports.show = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) res.send(err);
        res.json(contact);
    });
}

module.exports.create = (req, res) => {
    const newContact = Contact(req.body);
    newContact.save();
    res.json(newContact);
}