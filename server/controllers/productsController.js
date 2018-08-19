const Product = require('../models/product');

module.exports.list = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) res.send(err);
        res.json(products);
    });   
}

module.exports.show = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) res.send(err);
        res.json(product);
    });
}

module.exports.create = (req, res) => {
    const newProduct = Product(req.body);
    newProduct.save();
    res.json(newProduct);
}