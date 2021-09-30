const express = require('express')
const Controller = require('../controllers/enterprise.controller')
const SchemaValidateUser = require("../validators/user.validator")
const router = express.Router()
const Validate = require("../validators")
const jwtServices = require("../services/jwt.services")


router.post('/createEnterprise', Controller.createEnterpriseAsync)


module.exports = router