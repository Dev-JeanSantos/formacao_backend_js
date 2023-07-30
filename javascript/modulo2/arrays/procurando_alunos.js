const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const notas = [10,8,7.5,9];

const listaTypeDistintos = [alunos, notas]

function exibeNomeENotas(aluno){
    if(listaTypeDistintos[0].includes(aluno)){
    
        // listaAlunos = listaTypeDistintos[0]
        // listaNotas = listaTypeDistintos[1]
        
        //Desestruturação
        const [listaAlunos, listaNotas] =  listaTypeDistintos;
        
        const indiceAluno = listaAlunos.indexOf(aluno);       
        const notaAluno = listaNotas[indiceAluno]

        console.log(`Aluno ${aluno} está cadastrado e sua nota é ${notaAluno}`);
    }else{
        console.log(`Aluno ${aluno} não cadastrado!`);
    }
}

exibeNomeENotas('Joao');