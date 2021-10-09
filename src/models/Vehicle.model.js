const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const Vehicle = new Schema({
    name:defaultModel.stringR,
    type:defaultModel.number,
    vehicleNumber:defaultModel.string,
    imagesVehicle:defaultModel.array,
    status: defaultModel.number
}, { timestamps: true })


module.exports = mongoose.model('Vehicle', Vehicle)