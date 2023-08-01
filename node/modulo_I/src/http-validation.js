import chalk from "chalk";

function extractLinks (arrLinks) {
  return arrLinks.map((objectLink) => Object.values(objectLink).join())
}

async function checkoutStatus (listUrls) {
  const arrStatus = await Promise
  .all(
    listUrls.map(async (url) => {
      try {
        const response = await fetch(url)
        return response.status;
      } catch (erro) {
        return manageErrors(erro);
      }
    })
  )
  return arrStatus;
}

function manageErrors (erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return 'link não encontrado';
  } else {
    return 'ocorreu algum erro';
  }
}

export default async function validatedList (listOfLinks) {
  const links = extractLinks(listOfLinks);
  const status = await checkoutStatus(links);

  return listOfLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice]
  }))
}