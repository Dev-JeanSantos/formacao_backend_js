import  getArchivePromissesByAssync from './index.js';
import chalk from 'chalk';
import fs from 'fs';
import validatedList from './http-validation.js';

async function printList(valid, result, identifier = '') {
    if (valid) {
      console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identifier),
        await validatedList(result));    
    } else {
      console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identifier),
        result);
    }
  }

const path = process.argv;

async function processText(argument){
    const path = argument[2];
    const valid = argument[3] === '--valida';

    try {
        fs.lstatSync(path);
      } catch (erro) {
        if (erro.code === 'ENOENT') {
          console.log('arquivo ou diretório não existe');
          return;
        }
      }

      if (fs.lstatSync(path).isFile()) {
        const result = await getArchivePromissesByAssync(argument[2]);
        printList(valid, result);
      } else if (fs.lstatSync(path).isDirectory()) {
        const archives = await fs.promises.readdir(path)
        archives.forEach(async (nameArchive) => {
          const lista = await getArchivePromissesByAssync(`${caminho}/${nameArchive}`)
          printList(valid, lista, nameArchive)
        })
      }
    }

processText(path);