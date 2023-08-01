//Versão classica
function soma(num1, num2) {
    return num1 + num2;
}

console.log(`versao classica de função: ${soma(2,3)}`)

//Versão classica atribuindo função a uma variavel
const var_soma = function(num1, num2) {
    return num1 + num2;
}
console.log(`versão onde atribuindo uma função a uma variavel: ${var_soma(2,3)}`)


//Versão arrow function
const arrow_soma = (num1, num2) => {
    return num1 + num2;
}
console.log(`versão arrow function: ${arrow_soma(2,3)}`)


//Versão inline arrow function
const inline_arrow_soma = (num1, num2) => num1 + num2;
console.log(`versão inline arrow function: ${inline_arrow_soma(2,3)}`)