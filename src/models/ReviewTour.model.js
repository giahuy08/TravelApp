const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const ReviewTour = new Schema({
    idUser:defaultModel.stringR,
    idTour:defaultModel.stringR,
    star:defaultModel.number,
    comment:defaultModel.string,
    imageReview:defaultModel.array,
    status:defaultModel.number
}, { timestamps: true })


module.exports = mongoose.model('ReviewTour', ReviewTour)