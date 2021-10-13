const express = require('express')
const useRoute = require('./userRoute')
const enterpriseRoute = require('./enterpriseRoute')
const vehicleRoute = require('./vehicleRoute')
const tourRoute = require('./tourRoute')
const uploadfileRoute = require('./uploadfileRoute')
const discountRoute = require('./discountRoute')



const router = express.Router()
router.use('/user', useRoute)
router.use('/enterprise', enterpriseRoute)
router.use('/vehicle', vehicleRoute)
router.use('/tour', tourRoute)
router.use('/discount', discountRoute)
router.use('/uploadfile', uploadfileRoute) //Test




router.get('/healCheckw', (req, res) => res.status(200).send('Welcome to FreshFood'))

module.exports = router