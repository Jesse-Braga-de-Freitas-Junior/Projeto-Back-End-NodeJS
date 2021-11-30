const mongoose = require('mongoose') // mongoose é a versão do banco relacional mongoBD cloud. Ide ATLAS do Mongo

const Person = mongoose.model('Person', {
    name: String,
    placa: String,
    chassi: String,
    renavam: String,
    modelo: String,
    marca: String,
    ano: Number,
    cor: String
})

module.exports = Person
