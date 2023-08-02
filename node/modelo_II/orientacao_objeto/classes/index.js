import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

console.log('Objetos User')
const usuario1 = new User('Beltrano Maranhão', 'bel@email.com', '2010-02-04')
console.log(usuario1)
console.log(usuario1.exibirInfos())

usuario1.nome = 'Paulo'
console.log(usuario1.nome)

console.log('------------------------------')
console.log('Objetos Admin')
const newAdmin = new Admin('Ciclano', 'ciclano@email.com', '2018-05-01')
console.log(newAdmin)
console.log(newAdmin.exibirInfos())
console.log(newAdmin.criarCursos('Ciencia da Computação', 30))

console.log('------------------------------')
console.log('Objetos Docente')
const newDocente =  new Docente('Rangel Alberto', 'rangel@email.com', '1977-08-09')
console.log(newDocente)
console.log(newDocente.exibirInfos())
console.log(newDocente.aprovaEstudante('Mauricio', 'Java'))