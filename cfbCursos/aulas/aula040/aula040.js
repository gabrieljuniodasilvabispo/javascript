// Polimorfismo - dois métodos iguais com funcionalidades diferentes

class Carro {
    constructor(tipo, estagioTurbo){
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1){
            this.velMax = 100
            this.nome = "Comum"
        } else if(tipo == 2){
            this.velMax = 150
            this.nome = "Popular"
        } if(tipo == 3){
            this.velMax = 200
            this.nome = "Esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`velMax: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo}`)
        console.log("---------------------------")
    }
}

class Turbo {
    constructor(e){
        if(e == 0){
            this.pot = 0
        } else if(e == 1){
            this.pot = 50
        } else if(e == 2){
            this.pot = 75
        } else if(e == 3){
            this.pot = 100
        } else if(e == 4){
            this.pot = 150
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.nome = "Carro Especial"
        this.velMax = 300
    }
    info(){
        super.info()
    }
}

const c1 = new Carro(1, 1)
const c2 = new CarroEspecial(3)

console.log(c1)
console.log(c2)