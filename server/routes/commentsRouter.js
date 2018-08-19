const express = require("express");
const commentsRouter = express.Router();
const {list, show, create} = require("../controllers/commentsController");

const bodyParser = require("body-parser");
commentsRouter.use(bodyParser.json());

commentsRouter.get('/', list);
commentsRouter.get('/:id', show);
commentsRouter.post('/', create);

module.exports = commentsRouter;