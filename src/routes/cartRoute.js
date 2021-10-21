const express = require('express')
const Controller = require('../controllers/cart.controller')
const SchemaValidateDiscount = require("../validators/discount.validator")
const router = express.Router()
const Validate = require("../validators")
const { checkRole } = require('../middleware/checkRole.middleware')
const { defaultRoles } = require('../config/defineModel')
const jwtServices = require("../services/jwt.services")



router.post('/addTourToCart',jwtServices.verify, checkRole([defaultRoles.User]), Controller.createCartAsync)

module.exports = router