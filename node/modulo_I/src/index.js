// const chalk = require('chalk'); mudou usar o padrão de import abaixo
import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
  }

function correctError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'Arquivo não encontrado!'));
}

//Assyncrona
async function getArchivePromissesByAssync(pathArchive){
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(pathArchive, encoding)
        console.log(extraiLinks(text));
    }catch(error){
        correctError(error)
    }
}

//Promisses com then()
function getArchivePromissesByThen(pathArchive){
    const encoding = 'utf-8'; 
    fs.promises.readFile(pathArchive, encoding)
    .then((text) => console.log(chalk.yellow(text)))
    .catch(correctError)
}



//Normal
function getArchiveNormal(pathArchive){
    const encoding = 'utf-8'; 
    fs.readFile(pathArchive, encoding, (error, text) =>{
        if(error){
            correctError(error)
        }
        console.log(chalk.green(text));   
    })
}

// getArchiveNormal('./arquivos/texto.md');
// getArchivePromissesByThen('./arquivos/texto.md');

export default getArchivePromissesByAssync;