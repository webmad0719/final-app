const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coasterSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    inversions: { type: Number, required: true },
    length: { type: Number, required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true })

const Coaster = mongoose.model('Coaster', coasterSchema)
module.exports = Coaster