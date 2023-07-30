const nomes = ['Ana', 'Clara','Maria','Maria','Joao','Joao','Joao'];

console.log(`original: ${nomes}`)


const meuSet = new Set(nomes);
const nomeAtualizados = [...meuSet];
console.log(`sem duplicados: ${nomeAtualizados}`)
