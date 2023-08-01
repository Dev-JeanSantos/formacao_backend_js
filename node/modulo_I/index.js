// const chalk = require('chalk'); mudou usar o padrão de import abaixo
import chalk from 'chalk';
import fs from 'fs';

function correctError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'Arquivo não encontrado!'));
}

//Assyncrona
async function getArchivePromissesByAssync(pathArchive){
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(pathArchive, encoding)
        console.log(chalk.white(text));
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

getArchiveNormal('./arquivos/texto.md');
getArchivePromissesByThen('./arquivos/texto.md');
getArchivePromissesByAssync('./arquivos/texto.md');