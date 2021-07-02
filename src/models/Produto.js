const mongoose = require('../data')

let produtoSchema = new mongoose.Schema({
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tipo'
    },
    nome: String,
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marca'
    },
    partedocorpo: String,
    funcionalidade: String
}, {timestamps: true})

const Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto