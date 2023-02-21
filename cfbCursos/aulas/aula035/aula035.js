class Carro { // CLASSE PAI/BASE
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = ()=>{
        this.ligado =  true
    }
    desligar = ()=>{
        this.ligado =  false
    }
    setCor(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ // CLASSE FILHO
    constructor(nome, portas, blindagem, muniçao){
        super(nome, portas)
        this.blindagem = blindagem
        this.muniçao = muniçao
        this.cor = "Verde"
    }
    atirar(){
        if(this.muniçao > 0){
            this.muniçao--
        } else {
            console.log("Recarregue a munição")
        }
    }
}

let c1 = new Carro("Normal", 2)
c1.setCor("Vermelho")
c1.ligar()

let c2 = new Militar("Shark", 6, "Tank", 100)
c2.atirar()
c2.ligar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim" : "Não")}`)
console.log(`cor: ${c1.cor}`)
console.log("-----------------------------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.muniçao}`)
console.log(`Ligado: ${(c2.ligado?"Sim" : "Não")}`)
console.log(`cor: ${c2.cor}`)
console.log("-----------------------------------------------")