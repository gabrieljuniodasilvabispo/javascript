var usuario = { // Funções dentro de objetos
    digaOi: function(name) {
        return `Olá ${name}`
    }
}

console.log(usuario.digaOi('Gabriel'))

// Colocando variáveis dentro de objetos
var cor = 'azul'
var nome = 'Gabriel'
var cidade = 'Contagem'

var usuario2 = {
    cor,
    nome,
    cidade
}

console.log(usuario2)

// Colocando um objeto dentro de outro
var usuario3 = {
    nome:'Jonas',
    idade: 20
}
var extraInfo = {
    cidade:'Rio de Janeiro',
    estado: 'RJ'
}

var novoUsuario = Object.assign({}, usuario3, extraInfo) // Essa linha nos mostra que está sendo colocado 2 objetos dentro de um novo objeto vazio

console.log(novoUsuario)


// Usando o spread ou rest (...)

var novoUsuario2 = {
    ...usuario3,
    ...extraInfo
}

console.log(novoUsuario2)