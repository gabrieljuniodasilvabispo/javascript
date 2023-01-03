// OBJETOS EM JAVASCRIPT

class Carro {
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if (tipo == 2){
            this.tipo = "Casual"
            this.velmax = 120
        } else if (tipo == 3){
            this.tipo = "Passeio"
            this.velmax = 60
        }
    }

    getnome() {
        return this.nome
    }
    setnome(nome) {
        return this.nome = nome
    }

    getTipo() {
        return this.tipo
    }
    setTipo(tipo) {
        return this.tipo = tipo
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log("--------------------------------------------")
    }
}

let c1 = new Carro("McQueen", 1)
let c2 = new Carro("Doc", 2)
let c3 = new Carro("Uno",3)

console.log(c1.info())