var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/alunos.json"

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {turma: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
});

router.post('/alunos', function(req, res) {
  var registo = req.body
  registo['notas'] = []
  jsonfile.readFile(myBD, (erro, dados)=>{
      if(!erro){
          dados.push(registo)
          jsonfile.writeFile(myBD, dados, erro => {
              if(erro) console.log(erro)
              else console.log('Registo gravado com sucesso.')
          })
      }
      res.render('index', {turma: dados})
  })
})

router.post('/alunos/:idAluno/notas', function(req, res) {
  var registo = req.body
  console.log(req.body)

  jsonfile.readFile(myBD, (erro, dados)=>{
      if(!erro){
          var index = dados.findIndex(c => c.numero == req.params.idAluno)
          dados[index].notas.push(registo)
          jsonfile.writeFile(myBD, dados, erro => {
              if(erro) console.log(erro)
              else console.log('Registo gravado com sucesso.')
          })
      }
      res.render('single', {aluno: dados[index]})
  })
})

router.get('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  console.log('Aluno : ' + id)
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        var index = dados.findIndex(c => c.numero == id)
        if(index > -1) res.render('single', {aluno: dados[index]})              
        else {
          console.log('Estou aqui!')
          res.render('error', {error: erro, message: 'Aluno não encontrado'}) 
        }
    }
    else{
        res.render('error', {error: erro})  
    }
  })
})

router.delete('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  console.log('Aluno : ' + id)
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var index = alunos.findIndex(c => c.numero == id)
      if(index > -1){
        alunos.splice(index, 1)
        jsonfile.writeFile(myBD, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso.')
        })
      }
    }
    res.render('index', {turma: alunos})
  })
})

router.delete('/alunos/:idAluno/notas/:idNota', function(req, res) {
  jsonfile.readFile(myBD, (erro, turma)=>{
    if(!erro){
      var indexAluno = turma.findIndex(a => a.numero == req.params.idAluno)
      var aluno = turma[indexAluno]
      var indexNota = aluno.notas.findIndex(n => n.designacao == req.params.idNota)
      if(indexNota > -1){
        aluno.notas.splice(indexNota, 1)
        jsonfile.writeFile(myBD, turma, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso.')
        })
      }
    }
    res.render('single', {aluno: aluno})
  })
})
module.exports = router;
