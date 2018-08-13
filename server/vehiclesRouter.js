const vehicles = require("./vehicles");
const express = require("express");
const vehiclesRouter = express.Router();
let vehicleId = vehicles.length;

const bodyParser = require("body-parser")
vehiclesRouter.use(bodyParser.json());

vehiclesRouter.get('/', (req, res) => {
    res.json(vehicles);
})

vehiclesRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idIdx = vehicles.findIndex(vehicle => vehicle._id === id);
    if(idIdx < 0) res.status(404).send('vehicle not found');
    res.json(vehicles[idIdx]);
})

vehiclesRouter.post('/', (req, res) => {
    vehicleId ++;
    const newvehicle = Object.assign(req.body, {_id: vehicleId});
    if(!newvehicle) res.status(404).send('No vehicle.');
    vehicles.push(newvehicle)
    res.json(vehicles[vehicles.length-1]);
})



module.exports = vehiclesRouter;