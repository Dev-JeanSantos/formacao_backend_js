// const chalk = require('chalk'); mudou usar o padrão de import abaixo
import chalk from 'chalk';
import fs from 'fs';

function correctError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'Arquivo não encontrado!'));
}

//Promisses com then()
function getArchiveTwo(pathArchive){
    const encoding = 'utf-8'; 
    fs.promises.readFile(pathArchive, encoding)
    .then((text) => console.log(chalk.yellow(text)))
    .catch(correctError)
}



//Normal
function getArchiveOne(pathArchive){    
    const encoding = 'utf-8'; 
    fs.readFile(pathArchive, encoding, (error, text) =>{
        if(error){
            correctError(error)
        }
        console.log(chalk.green(text));   
    })
}

getArchiveOne('./arquivos/texto.md');
getArchiveTwo('./arquivos/texto.md');