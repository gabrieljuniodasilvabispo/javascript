// OBJETOS EM JAVASCRIPT

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

let p1 = new Pessoa(10)
let p2 = new Pessoa("John")

console.log(p1.nome)
console.log(p2.nome)