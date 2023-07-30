const nomes = ['FULANO', 'BELTRANO', 'CICLANO', 'PAULO']

nomes.forEach(function (k) {
    console.log(k)
});


nomes.forEach( (k) => {
    console.log(k)
});

function imprimeNome(nome) {
    console.log(nome)
}
nomes.forEach(imprimeNome);