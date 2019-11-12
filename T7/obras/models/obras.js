const mongoose = require('mongoose')



var obrasSchema = new mongoose.Schema({
    id: String,
    nome: String,
    desc: String,
    anoCriacao: { type: Number, min: 0, max: 2020 },
    periodo: String,
    compositor: String,
    duracao: String

});

module.exports = mongoose.model('obras', obrasSchema);