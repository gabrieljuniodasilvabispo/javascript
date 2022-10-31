// Alterando o nome da propriedade do objeto usando o VALOR da variável
var nome = 'lastName'
var cidade = 'city'

var usuario = {
    [nome]: 'Bispo',
    [cidade]: 'Contagem'
}
console.log(usuario)


// Array's com objetos

var usuarios = [
    {
        nome: 'Gabriel',
        idade: 19
    }, 
    {
        nome: 'Maria',
        idade: 20
    }, 
    {
        nome: 'Jonas',
        idade: 23
    }
]

console.log(usuarios[1].idade)

var usuario = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(posicao) {
        this.posicao = posicao
    },
    proximo() {
        ++this.posicao
    },
    anterior() {
        --this.posicao
    }
}
console.log(usuario.atual)

usuario.proximo()
console.log(usuario.atual)

usuario.proximo()
console.log(usuario.atual)

usuario.anterior()
console.log(usuario.atual)

usuario.atual = 0
console.log(usuario.atual)