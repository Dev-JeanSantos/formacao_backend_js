import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCursos(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} com ${vagas} vagas.`
    }
}

const newAdmin = new Admin('Ciclano', 'ciclano@email.com', '2018-05-01')
console.log(newAdmin)
console.log(newAdmin.exibirInfos())

console.log(newAdmin.criarCursos('Ciencia da Computação', 30))