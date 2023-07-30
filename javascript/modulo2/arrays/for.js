const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice])
}

const notas = [10, 6.5, 8, 7.5, 10];
let somatorio = 0

for (let i = 0; i < notas.length; i++) {
    somatorio += notas[i]

}
const media = somatorio / notas.length
console.log(`Somatorio notas: ${somatorio}`)
console.log(`media das notas com for comum: ${media}`)

let somaDasNotas = 0
for (let nota of notas) {
    somaDasNotas +=nota
}
const media2 = somaDasNotas / notas.length
console.log(`media com for of: ${media2}`)