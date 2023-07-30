const notas = [10,6.5, 8, 7.5, 5.6, 5.4]

let media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length)
console.log(notas)
console.log(`media: ${media}`)

//Inserindo uma nova nota no array com o push

notas.push(7)
media = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length)
console.log(notas)
console.log(`media com nova nota: ${Math.round(media)}`)

//Excluindo uma nota no array com o pop
notas.pop()
media = ((notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length)
console.log(notas)
console.log(`media com nova nota: ${Math.round(media)}`)
