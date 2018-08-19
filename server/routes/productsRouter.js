const express = require("express");
const productsRouter = express.Router();
const {list, show, create} = require("../controllers/productsController");

const bodyParser = require("body-parser");
productsRouter.use(bodyParser.json());

productsRouter.get('/', list);
productsRouter.get('/:id', show);
productsRouter.post('/', create);

module.exports = productsRouter;
