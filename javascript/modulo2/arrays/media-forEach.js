const notas = [10, 6.5, 8, 7.5, 11];

let SomasDasNotas = 0;
notas.forEach(function (nota){
    SomasDasNotas += nota;
})
const media = SomasDasNotas / notas.length;
console.log(media)