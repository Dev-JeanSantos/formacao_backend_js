const alunos = ['Joao', 'Juliana', 'Ana', 'Melissa', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Marcos', 'Maria', 'felipe', 'Tania', 'Juan', 'Heitor', 'Iago'];
console.log(`lista completa: ${alunos.length}`);
console.log(alunos);
//Slice => fatiar ou dividir sem altear o array original
const sala1 = alunos.slice(0, alunos.length / 2)
console.log(`primeira metade da lista: ${sala1}`);
const sala2 = alunos.slice(alunos.length / 2)
console.log(`segunda metade da lista: ${sala2}`);

//Splice => exclui elementos da lista passando o indice e a quantidade de elementos a ser eliminados.
sala1.splice(0, 1, 'Mauricio', 'Fernando')
console.log(`lista após deletar o primeiro elemento: ${sala1}`);

sala1.push('Jean')
console.log(`Novo elemento na lista: ${sala1}`);

//juntando as salas
//concat => concatena arrays
const salaUnificada = sala1.concat(sala2) 
console.log(salaUnificada.length)
console.log(`sala unificada: ${salaUnificada}`);