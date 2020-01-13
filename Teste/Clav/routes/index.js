var express = require('express');
var router = express.Router();
const axios = require('axios');

var apiKey = 'apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'

var apiUrl = 'http://clav-api.dglab.gov.pt/api'
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(apiUrl+ '/tipologias?'+ apiKey)
  .then()
  .then(dados => {
    res.render('index', {title:'CLAV - Classificação e Avaliação da Informação Pública', lista: dados.data});
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
});

module.exports = router;
