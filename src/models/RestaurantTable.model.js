const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const RestaurantTable = new Schema({
    idEnterprise:defaultModel.stringR,
    name:defaultModel.stringR,
    size:defaultModel.number,
    floor:defaultModel.string,
    detail:defaultModel.string,
    price:defaultModel.number,
    checkIn:defaultModel.string,
    checkOut:defaultModel.string,
    status:defaultModel.number
}, { timestamps: true })


module.exports = mongoose.model('RestaurantTable', RestaurantTable)