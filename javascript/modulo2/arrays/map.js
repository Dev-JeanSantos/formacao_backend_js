const notas = [10, 6.5, 8, 7.5, 11];
console.log(notas)

const notasAtualizadas =  notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1 ;
})

console.log(notasAtualizadas);

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

console.log(nomes);
const nomes_padronizados = nomes.map((nome) =>nome.toUpperCase());
console.log(nomes_padronizados);