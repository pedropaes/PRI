var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3004/api/filmes')
      .then(dados =>{
        res.render('lista-filmes', { lista: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error:erro})
    })
});

router.get('/inserir', function(req,res){
  res.render('form-filme')
})

router.get('/:idFilme', function(req,res){
  axios.get('http://localhost:3004/api/filmes/'+ req.params.idFilme)
      .then(dados =>{
        res.render('single', { filme: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error:erro})
    })
})

router.post('/', function(req,res){
  axios.post('http://localhost:3004/api/filmes', req.body)
      .then(dados =>{
        res.redirect('/');
      })
      .catch(erro =>{
        res.render('error', {error:erro})
    })
})

router.delete('/:idFilme', function(req, res, next) {
  axios.delete('http://localhost:3004/api/filmes/'+ req.params.idFilme)
  .then(dados =>{
    res.redirect('/filmes');
  })
  .catch(erro =>{
    res.render('error', {error:erro})
})
});
module.exports = router;