const express = require("express");
const vehiclesRouter = express.Router();
const {list, show, create} = require("../controllers/vehiclesController")

const bodyParser = require("body-parser");
vehiclesRouter.use(bodyParser.json());

vehiclesRouter.get('/', list);
vehiclesRouter.get('/:id', show);
vehiclesRouter.post('/', create);

module.exports = vehiclesRouter;
