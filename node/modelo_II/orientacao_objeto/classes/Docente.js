import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso){
        return `O estudante ${estudante} aprovado no curso ${curso}`
    }
}

const newDocente =  new Docente('Rangel Alberto', 'rangel@email.com', '1977-08-09')
console.log(newDocente)
console.log(newDocente.exibirInfos())
console.log(newDocente.aprovaEstudante('Mauricio', 'Java'))