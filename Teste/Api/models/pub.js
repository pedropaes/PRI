const mongoose = require('mongoose')

var pubSchema = new mongoose.Schema({
    type: String,
    id: String,
    authors:[String],
    editors:[String],
    title: String,
    chapter: String,
    pages: String,
    journal: String,
    volume: String,
    publisher: String,
    booktitle: String,
    year: String,
    address: String,
    month: String,
    isbn: String,
    doi: String
});

module.exports = mongoose.model('pub', pubSchema);