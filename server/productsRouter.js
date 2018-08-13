const products = require("./products");
const express = require("express");
const productsRouter = express.Router();
let productId = products.length;

const bodyParser = require("body-parser")
productsRouter.use(bodyParser.json());

productsRouter.get('/', (req, res) => {
    res.json(products);
})

productsRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idIdx = products.findIndex(product => product._id === id);
    if(idIdx < 0) res.status(404).send('product not found');
    res.json(products[idIdx]);
})

productsRouter.post('/', (req, res) => {
    productId ++;
    const newproduct = Object.assign(req.body, {_id: productId});
    if(!newproduct) res.status(404).send('No product.');
    products.push(newproduct)
    res.json(products[products.length-1]);
})

module.exports = productsRouter;
