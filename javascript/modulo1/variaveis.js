//var : pode ser declarado sem ser inicializado e está disponível fora do seu escopo.
//let : pode ser declarado sem ser inicializado e não está disponível fora do seu escopo.
//const : não pode ser declarado sem ser inicializado e não está disponível fora do seu escopo.

//Aplicações
var altura_var = 5;
var comprimento_var = 7;

area_var = altura_var * comprimento_var;
console.log(`Utilizando o var: ${area_var}`)

let forma_let = 'retângulo'
let altura_let = 5;
let comprimento_let = 7;
let area_let;

if (forma_let === 'retângulo') {
  area_let = altura_let * comprimento_let;
} else {
  area_let = (altura_let * comprimento_let) / 2;
}

console.log(`Utilizando o let: ${area_let}`)

const forma_const = 'triângulo';
const altura_const = 5;
const comprimento_const = 7;
let area_const;

if (forma_const === 'quadrado') {
  area_const = altura_const * comprimento_const;
} else {
  area_const = (altura_const * comprimento_const) / 2;
}

console.log(`Utilizando o const: ${area_const}`)