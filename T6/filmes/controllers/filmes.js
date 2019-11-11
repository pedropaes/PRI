var Filme = require('../models/filmes')

const Filmes = module.exports


// Devolve a lista de alunos
Filmes.listar = () => {
    return Filme
        .find()
        .exec()
}

Filmes.consultar = id => {    // ou module.exports.consultar = id => {}
    return Filme
        .findOne({_id: id})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.apagar = id =>{
    return Filme.deleteOne({ _id: id }).exec();
}

module.exports.inserir = filme => {
    
    var novo = new Filme(filme)
    console.log('Isto: '+ novo)
    return novo.save()
}


