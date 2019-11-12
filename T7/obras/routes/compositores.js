var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras')

/* GET obras listing. */
router.get('/', function(req, res, next) {
  
    Obras.agruparCompositor()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

});

router.get('/:nome', function(req, res, next){

    Obras.filtrarCompositor(req.params.nome)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))

})
module.exports = router;