let idade = 19
let nome = 'gabriel'
let peso = 70

class pessoa{
    constructor(n, p, i) {
        this.nome = n
        this.peso = p
        this.idade = i

        console.log(`Eu sou ${this.nome}, tenho ${this.idade} e peso ${this.peso}KG`)
    }
}

let p1 = new pessoa(nome, peso, idade)