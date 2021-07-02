const mongoose = require('../data')

let marcaSchema = new mongoose.Schema({
    nome: String,
    pais: String,
    vendenobrasil: Boolean,
    possuilojafisica: Boolean,
    testadaemanimais: Boolean,
}, {timestamps: true})

const Marca = mongoose.model('Marca', marcaSchema)

module.exports = Marca