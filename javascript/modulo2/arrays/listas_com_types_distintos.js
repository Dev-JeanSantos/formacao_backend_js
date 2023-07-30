const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const notas = [10,8,7.5,9];

const listaTypeDistintos = [alunos, notas]

console.log(listaTypeDistintos)
console.log(`A aluna da posição 1 da lista de alunos é: ${
    listaTypeDistintos[0][1] 
} e sua nota: ${listaTypeDistintos[1][1]}`)