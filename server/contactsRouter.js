const contacts = require("./contacts");
const express = require("express");
const contactsRouter = express.Router();
let contactId = contacts.length;

const bodyParser = require("body-parser")
contactsRouter.use(bodyParser.json());

contactsRouter.get('/', (req, res) => {
    res.json(contacts);
})

contactsRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idIdx = contacts.findIndex(contact => contact._id === id);
    if(idIdx < 0) res.status(404).send('Contact not found');
    res.json(contacts[idIdx]);
})

contactsRouter.post('/', (req, res) => {
    contactId ++;
    const newContact = Object.assign(req.body, {_id: contactId});
    if(!newContact) res.status(404).send('No comment.');
    contacts.push(newContact)
    res.json(contacts[contacts.length-1]);
})

module.exports = contactsRouter;