const express = require("express");
const CarController = require("./../Controllers/CarController");

const Router = express.Router();

Router.route("/api/cars").get(CarController.getAllCars);

module.exports = Router;
