const express = require('express');
const router = express.Router();
const axios = require('axios')
const lhost = require('../config/env').host
var path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
  axios.get(lhost + '/api/ficheiros')
    .then(dados => {
      res.render('index', {lista: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.get('/images/:ficheiro', function(req, res){
  var dir = __dirname + '/../data/' + req.params.ficheiro;
  res.sendFile(path.resolve(dir));
})

module.exports = router