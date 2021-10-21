const express = require('express')
const useRoute = require('./userRoute')
const enterpriseRoute = require('./enterpriseRoute')
const vehicleRoute = require('./vehicleRoute')
const tourRoute = require('./tourRoute')
const uploadfileRoute = require('./uploadfileRoute')
const discountRoute = require('./discountRoute')
const reviewtourRoute = require('./reviewtourRoute')
const hotelroomRoute = require('./hotelroomRoute')
const cartRoute = require('./cartRoute')


const router = express.Router()
router.use('/user', useRoute)
router.use('/enterprise', enterpriseRoute)
router.use('/vehicle', vehicleRoute)
router.use('/tour', tourRoute)
router.use('/discount', discountRoute)
router.use('/reviewtour', reviewtourRoute)
router.use('/hotelroom', hotelroomRoute)
router.use('/uploadfile', uploadfileRoute) //Test
router.use('/cart',cartRoute)




router.get('/healCheckw', (req, res) => res.status(200).send('Welcome to FreshFood'))

module.exports = router