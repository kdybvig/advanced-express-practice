const Vehicle = require("../models/vehicle");

module.exports.list = (req, res) => {
    Vehicle.find({}, (err, comments) => {
        if (err) res.send(err);
        res.json(comments);
    });   
}

module.exports.show = (req, res) => {
    Vehicle.findById(req.params.id, (err, comment) => {
        if (err) res.send(err);
        res.json(comment);
    });
}

module.exports.create = (req, res) => {
    const newVehicle = Vehicle(req.body);
    newVehicle.save();
    res.json(newVehicle);
}