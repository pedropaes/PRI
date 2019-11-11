const mongoose = require('mongoose')

/*
var actor  = new mongoose.Schema({
    indicador: String,
    nota: Number
})*/

var filmeSchema = new mongoose.Schema({
    title: String,
    year: String,
    cast: [String],
    genres: [String]

});

module.exports = mongoose.model('filme', filmeSchema);
