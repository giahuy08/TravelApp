const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const Tour = new Schema({
    name:defaultModel.stringR,
    place:defaultModel.stringR,
    detail:defaultModel.string,
    payment: defaultModel.string,
    imageTour:defaultModel.array,
    status:defaultModel.string
}, { timestamps: true })


module.exports = mongoose.model('Tour', Tour)