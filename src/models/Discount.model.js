const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const Discount = new Schema({
    idTour:defaultModel.stringR,
    code:defaultModel.string,
    discount:defaultModel.string,
    status:defaultModel.number
}, { timestamps: true })


module.exports = mongoose.model('Discount', Discount)