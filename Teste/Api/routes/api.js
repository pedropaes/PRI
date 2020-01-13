var express = require('express');
var router = express.Router();
var Pubs = require('../controllers/pubs')
/* GET home page. */
router.get('/pubs', function(req, res, next) {
    if(req.query.type && req.query.year){
        Pubs.filtraTipoAno(req.query.type, req.query.year)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.type){
        Pubs.filtraTipo(req.query.type)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.autor){
        Pubs.filtraTipo(req.query.genero)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
      Pubs.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
  
  });

  
router.get('/pubs/:id', function(req, res, next) {
    Pubs.consultar(req.params.idPub)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  })

router.get('/types', function(req, res, next) {
    Pubs.listarTipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores', function(req, res, next) {
    Pubs.listarAutores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})
module.exports = router;
