const palco = document.querySelector("#palco")
const num_objetos = document.querySelector("#num_objetos")
const txt_qntd = document.querySelector("#txt_qntd")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola{
    constructor(arrayBolas){
        this.tamanho = Math.floor(Math.random()*10)+10
        this.r= Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco-this.tamanho))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tamanho))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
    }
}

window.addEventListener("resize",(evt)=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click",(evt)=>{
    const qntd = txt_qntd.value
    for(let i=0; i < qntd; i++){
        const bolinha = new Bola()
        const div = document.createElement("div")
        
    }
})

btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        // Remover bolas
    })
})