function apagaItem(ident){
    console.log('Vou apagar o item: ' + ident)
    axios.delete('/api/filmes/' + ident)
        .then(response => window.location.assign('/filmes'))
        .catch(error => console.log(error))
}
