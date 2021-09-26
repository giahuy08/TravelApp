const express = require('express')
const Controller = require('../controllers/testController')
const SchemaValidateUser = require("../validators/user.validator")
const router = express.Router()
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")


// var multer = require("multer");
// const path = require("path");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });
// var cpUpload = upload.fields([{ name: 'Image', maxCount: 1 }]);
router.post('/testlogin', Controller.loginAsync)


module.exports = router