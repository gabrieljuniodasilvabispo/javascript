class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }
    getIdade(){
        return this.idade
    }
    setIdade(idade){
        this.idade = idade
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = ()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br> Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt)=>{
    res.innerHTML = ""
    const nome = document.querySelector("#nome")
    const idade = document.querySelector("#idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})