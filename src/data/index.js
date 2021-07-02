const mongoose = require('mongoose')
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const URL = 'mongodb+srv://francine:m4ub4c7UKtsOiVu9@cluster0.m1vld.mongodb.net/ProjetoFinal?retryWrites=true&w=majority'

mongoose.connect(URL, options, function(err){
    if(!err){
        console.log('Conectado com o banco')
    }
})

module.exports = mongoose