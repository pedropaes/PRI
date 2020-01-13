var Pub = require('../models/pub')

const Pubs = module.exports

Pubs.listar = () => {
    return Pub
        .find({},{_id:0,type:1,id:1,title:1,year:1})
        .exec()
}

Pubs.consultar = id => {
    return Pub
        .findOne(id)
        .exec()
}

Pubs.listarTipos = () =>{
    return Pub
    .distinct("type")
    .exec()
}


Pubs.filtraTipo = tipo =>{
    return Pub
    .find({"type":tipo},{})
    .exec()
}

Pubs.filtraTipoAno = (tipo,ano) =>{
    return Pub
    .find( { $and: [ { type:  tipo}, { year: { $gte: ano } } ] } )
    .exec()
}


Pubs.listarAutores = () =>{
    return Pub
    .aggregate([{$unwind: "$authors"}, {$group: {_id: "$authors"}},{$sort: {"_id":1}}])
    .exec()
}