const express = require('express');
const router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET da lista de ficheiros */
router.get('/ficheiros', function(req, res) {
    Ficheiros.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})


router.post('/ficheiros', upload.array('ficheiro'), function(req,res){
    console.log(JSON.stringify(req.body))
    
    var oldPath;
    var newPath;
    var data;
    var novoFicheiro;
    var file;
    var body;
    
    for(var i = 0; i < req.files.length;i++){
        file = req.files[i];
        if(req.files.length == 1) body = req.body.desc[i]
        else body = req.body.desc;
        console.log('body>>>>' + body)
        oldPath = __dirname + '/../' + file.path
        newPath = __dirname + '\\..\\data\\' + file.originalname

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
        })

        data = new Date()

        novoFicheiro = new Ficheiro({ 
            data: data.toISOString(),
            desc: body,
            name: file.originalname,
            path: '/images/' + file.originalname, 
            mimetype: file.mimetype, 
            size: file.size
        });
    
    novoFicheiro.save(function (err, ficheiro) {
        if (err) res.status(500).jsonp(err)
    })
    
    }
    res.redirect('/')
})


module.exports = router;