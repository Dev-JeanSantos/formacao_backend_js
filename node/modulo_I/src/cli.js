import  getArchivePromissesByAssync from './index.js';
import chalk from 'chalk';

const path = process.argv;

async function processText(path){
    const result = await getArchivePromissesByAssync(path[2]);
    console.log(chalk.yellow('Lista de Links'), result);
}

processText(path);