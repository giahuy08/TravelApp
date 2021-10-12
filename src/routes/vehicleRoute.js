const express = require('express')
const Controller = require('../controllers/vehicle.controller')
const SchemaValidateVehicle = require("../validators/vehicle.validator")
const router = express.Router();
const path = require("path");
var multer = require("multer");
const Validate = require("../validators")
const { checkRole } = require('../middleware/checkRole.middleware')
const { defaultRoles } = require('../config/defineModel')
const jwtServices = require("../services/jwt.services")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + Math.floor(Math.random() * 100) + path.extname(file.originalname));
    },
  });
const upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'ImagesVehicle', maxCount: 100 }]);

router.get('/getOneVehicle', Controller.getOneVehicleAsync)
router.get('/getAllVehicle', Controller.getAllVehicleAsync)
router.post('/createVehicle', jwtServices.verify, checkRole([defaultRoles.Admin]), cpUpload, Controller.createVehicleAsync);
router.put('/updateVehicle', jwtServices.verify, checkRole([defaultRoles.Admin]), cpUpload, Controller.updateVehicleAsync);
router.delete('/deleteVehicle', jwtServices.verify, checkRole([defaultRoles.Admin]), Controller.deleteVehicleAsync);



module.exports = router