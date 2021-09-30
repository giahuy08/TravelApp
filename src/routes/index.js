const express = require('express')
const useRoute = require('./userRoute')
const enterpriseRoute = require('./enterpriseRoute')



const router = express.Router()
router.use('/user', useRoute)
router.use('/enterprise', enterpriseRoute)



router.get('/healCheckw', (req, res) => res.status(200).send('Welcome to FreshFood'))

module.exports = router