const express = require('express')
const Controller = require('../controllers/vehicle.controller')
const SchemaValidateVehicle = require("../validators/vehicle.validator")
const router = express.Router()
const Validate = require("../validators")

router.get('/getOneVehicle', Controller.getOneVehicleAsync)
router.get('/getAllVehicle', Controller.getAllVehicleAsync)
router.post('/createVehicle',Controller.createVehicleAsync);
router.put('/updateVehicle',Controller.updateVehicleAsync);
router.delete('/deleteVehicle',Controller.deleteVehicleAsync);



module.exports = router