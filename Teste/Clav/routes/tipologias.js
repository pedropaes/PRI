var express = require('express');
var router = express.Router();
const axios = require('axios');

var apiKey = 'apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'

var apiUrl = 'http://clav-api.dglab.gov.pt/api'
/* GET users listing. */
router.get('/:id', function(req, res, next) {

  axios.get(apiUrl+ '/tipologias/'+req.params.id+'?info=completa&'+ apiKey)
  .then(axios.get(apiUrl+ '/tipologias/'+req.params.id+'/elementos?'+ apiKey))
  .then(axios.get(apiUrl+ '/tipologias/'+req.params.id+'/intervencao/dono?'+ apiKey))
  .then(axios.get(apiUrl+ '/tipologias/'+req.params.id+'/intervencao/participante?'+ apiKey))
  .then(dados => {
    res.render('individual', {title: req.params.id, tip: dados.data});
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
});

module.exports = router;
