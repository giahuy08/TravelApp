const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const Vehicle = new Schema({
    name:defaultModel.stringR,
    type:defaultModel.string,
    vehicleNumber:defaultModel.string,
    imagesVehicle:defaultModel.array,
   
}, { timestamps: true })


module.exports = mongoose.model('Vehicle', Vehicle)