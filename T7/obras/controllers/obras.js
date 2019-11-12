var Obra = require('../models/obras')

const Obras = module.exports


Obras.listar = () =>{
    return Obra
            .find()
            .exec()
}

Obras.consultar = id => {    // ou module.exports.consultar = id => {}
    return Obra
        .findOne({id: id})
        .exec()
}

Obras.filtrarAno = ano =>{
    return Obra
        .find({anoCriacao: ano})
        .exec()
}

Obras.filtrarPeriodo = p =>{
    return Obra 
        .find({periodo: p})
        .exec()
}

Obras.filtrarCompositor = c =>{
    return Obra 
        .find({"compositor" :  { '$regex' : c, '$options' : 'i' }})
        .exec()
}

Obras.agruparCompositor = ()  =>{
    return Obra 
        .aggregate([{$unwind: "$compositor"}, {$group:{_id:"$compositor", numObras:{$sum:1}, obras:{$push: {t: "$nome"}}}},{$sort: {numFilmes:-1}}])
        .exec()
}

module.exports.filtrarAnoPeriodo = (a,p) =>{
    return Obra
        .find()
}
