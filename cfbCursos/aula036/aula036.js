const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem  = document.querySelector("#f_blindagem")
const f_muniçao  = document.querySelector("#f_muniçao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const btn_addCarro = document.querySelector("#addCarro")
const carros = document.querySelector("#carros")

let array_carros = []

f_tipoMilitar.addEventListener("click", (evt)=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_muniçao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_muniçao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", (evt)=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_muniçao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_muniçao.setAttribute("disabled", "disabled")
})

const gerenciarExibicaoCarros = ()=>{
    carros.innerHTML = ""
    array_carros.map((el)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "carros")
        div.innerHTML = `Nome: ${el.nome} <br> Portas: ${el.portas} <br> Cor: ${el.cor} <br> Blindagem: ${el.blindagem} <br> Munição: ${el.muniçao}`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click", (evt)=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        array_carros.push(c)
    } else if (f_tipoMilitar.checked){
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_muniçao.value)
        array_carros.push(c)
    }
    gerenciarExibicaoCarros()
})

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

// let c1 = new Carro("Normal", 2)
// c1.setCor("Vermelho")
// c1.ligar()

// let c2 = new Militar("Shark", 6, "Tank", 100)
// c2.atirar()
// c2.ligar()

// console.log(`Nome: ${c1.nome}`)
// console.log(`Portas: ${c1.portas}`)
// console.log(`Ligado: ${(c1.ligado?"Sim" : "Não")}`)
// console.log(`cor: ${c1.cor}`)
// console.log("-----------------------------------------------")

// console.log(`Nome: ${c2.nome}`)
// console.log(`Portas: ${c2.portas}`)
// console.log(`Blindagem: ${c2.blindagem}`)
// console.log(`Munição: ${c2.muniçao}`)
// console.log(`Ligado: ${(c2.ligado?"Sim" : "Não")}`)
// console.log(`cor: ${c2.cor}`)
// console.log("-----------------------------------------------")