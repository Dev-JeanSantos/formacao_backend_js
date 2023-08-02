function User(nome, email){
    this.nome = nome,
    this.email =  email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

const userOne = new User('Jean Santos', 'email@email.com')
const userTwo = new User('Fulano Silva', 'email2@email.com')
console.log(userOne.exibirInfos())
console.log(userTwo.exibirInfos())


//Herança

function Admin(role){
    User.call(this, 'Beltrano Souza', 'beltrano@email.com')
    this.role = role || 'estudante'
}

console.log("------------------------------")
Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

console.log("------------------------------")

const user1 = {
    //construtor com init
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome){
        return this.nome
    }
}

const newUser = Object.create(user1)
newUser.init('Ruan', 'ruan@email.com')
console.log(newUser.exibirInfos('Ciclano Cardoso'))
console.log(user1.isPrototypeOf(newUser))