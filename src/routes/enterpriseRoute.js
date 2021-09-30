const express = require('express')
const Controller = require('../controllers/enterprise.controller')
const SchemaValidateUser = require("../validators/user.validator")
const router = express.Router()
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")


router.get('/getOneEnterprise', Controller.getOneEnterpriseAsync)
router.get('/getAllEnterprise', Controller.getAllEnterpriseAsync)
router.post('/createEnterprise', Controller.createEnterpriseAsync)
router.put('/updateEnterprise', Controller.updateEnterpriseAsync)
router.delete('/deleteEnterprise', Controller.deleteEnterpriseAsync)


module.exports = router