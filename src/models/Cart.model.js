const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema

const Cart = new Schema({
    idUser:defaultModel.stringR,
    paymentStatus:defaultModel.number,
    tours:defaultModel.array
})