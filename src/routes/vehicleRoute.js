const express = require('express')
const Controller = require('../controllers/vehicle.controller')
const SchemaValidateVehicle = require("../validators/vehicle.validator")
const router = express.Router()
const Validate = require("../validators")


router.post('/createVehicle',Controller.createVehicle);

module.exports = router