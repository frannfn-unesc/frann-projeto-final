const mongoose = require('../data')

let tipoSchema = new mongoose.Schema({
    tipo: String,
    tipodepele: String,
    textura: String,
    cor: String,
}, {timestamps: true})

const Tipo = mongoose.model('Tipo', tipoSchema)

module.exports = Tipo