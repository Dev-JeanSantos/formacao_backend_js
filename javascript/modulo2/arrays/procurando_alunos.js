const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const notas = [10,8,7.5,9];

const listaTypeDistintos = [alunos, notas]

function exibeNomeENotas(aluno){
    if(listaTypeDistintos[0].includes(aluno)){
        const indiceAluno = listaTypeDistintos[0].indexOf(aluno);
        console.log(`Indice do aluno: ${indiceAluno}`);
        const notaAluno = listaTypeDistintos[1][indiceAluno]
        console.log(`Aluno ${aluno} está cadastrado e sua nota é ${notaAluno}`);
    }else{
        console.log(`Aluno ${aluno} não cadastrado!`);
    }
}

exibeNomeENotas('Joao');