const cliente = {
    nome: 'Joao',
    idade: 32,
    cpf: '1123332',
    email: 'email@email.com'
}

console.log(`O nome do cliente é ${cliente['nome']} e sua idade é ${cliente['idade']}`);
console.log(`Os três primeiros numeros do CPF: ${cliente['cpf'].substring(0,3)}`);