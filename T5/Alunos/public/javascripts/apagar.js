function apagaAluno(ident){
    console.log('Vou apagar o item: ' + ident )
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(identAluno, identNota){
    console.log('identAluno: ' + identAluno )
    console.log('identNota: ' + identNota )
    axios.delete('/alunos/'+ identAluno + '/notas/' + identNota)
        .then(response => window.location.assign('/alunos/' + identAluno))
        .catch(error => console.log(error))
}