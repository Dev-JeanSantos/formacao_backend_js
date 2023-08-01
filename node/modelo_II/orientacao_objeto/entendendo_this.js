//O método call() executa a função passando valores e parâmetros específicos para serem 
//usados como contexto do this. Ou seja, é possível atribuir um this diferente do 
//contexto atual ao executar a função.
function exibeInfos() {
 console.log(this.nome, this.email)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}

exibeInfos.call(user)


//Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:
function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com


   //O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:
   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const usuario = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(usuario, [this.nome, this.email])
    }
   }
    usuario.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
