const express = require('express')
const Controller = require('../controllers/vehicle.controller')
const SchemaValidateVehicle = require("../validators/vehicle.validator")
const router = express.Router();
const path = require("path");
var multer = require("multer");
const Validate = require("../validators")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + Math.floor(Math.random() * 100) + path.extname(file.originalname));
    },
  });
const upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'Image', maxCount: 100 }]);

router.get('/getOneVehicle', Controller.getOneVehicleAsync)
router.get('/getAllVehicle', Controller.getAllVehicleAsync)
router.post('/createVehicle', cpUpload, Controller.createVehicleAsync);
router.put('/updateVehicle', cpUpload, Controller.updateVehicleAsync);
router.delete('/deleteVehicle',Controller.deleteVehicleAsync);



module.exports = router