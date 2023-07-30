const alunos = ['Ana', 'Marcos','Maria','Mauro'];
const medias = [7,4.5,8,7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7 ;
})

console.log(reprovados);


const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.lenght
    return media;
}

console.log(`A media da sala de JS é ${calculaMedia(salaJS)}`)