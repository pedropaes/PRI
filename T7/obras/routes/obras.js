var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras')

/* GET obras listing. */
router.get('/', function(req, res, next) {
  if(req.query.periodo){
    Obras.filtrarPeriodo(req.query.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.ano){
    Obras.filtrarAno(req.query.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.compositor){
    Obras.filtrarCompositor(req.query.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Obras.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }

});

module.exports = router;
