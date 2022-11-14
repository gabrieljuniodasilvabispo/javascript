class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if(ptipo == 1) {
           this.tipo = 'Esportivo'
           this.velmax = 300 
        } else if(ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100 
        } else {
            this.tipo = 'Casual'
            this.velmax = 160
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelmax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log("-------------------------------------------")
    }
}

let c1 = new Carro("Rapidão",1)
let c2 = new Carro("Xesq", 2)
let c3 = new Carro("Bresq", 3)

// DIFERENTES MANEIRAS DE SE CHAMAR MÉTODOS E PROPRIEDADES DENTRO DE UM OBJETO: 

//console.log(c1.nome)
//console.log(c1.tipo)
//console.log(c1.velmax)

//c2.info()

//console.log(c3.getNome())

//console.log(c2.getInfo())

c1.setNome("CABULOSOOO")
c1.info()