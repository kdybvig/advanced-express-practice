const express = require("express");
const contactsRouter = express.Router();
const {list, show, create} = require("../controllers/contactsController");

const bodyParser = require("body-parser");
contactsRouter.use(bodyParser.json());

contactsRouter.get('/', list);
contactsRouter.get('/:id', show);
contactsRouter.post('/', create);

module.exports = contactsRouter;
