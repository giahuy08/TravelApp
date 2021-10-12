const mongoose = require('mongoose')
const { defaultModel } = require('../config/defineModel')
const Schema = mongoose.Schema


const Enterprise = new Schema({
    name:defaultModel.stringR,
    type:defaultModel.number,
    detail:defaultModel.string,
    logo:defaultModel.stringImage,
    status:defaultModel.number
}, { timestamps: true })


module.exports = mongoose.model('Enterprise', Enterprise)