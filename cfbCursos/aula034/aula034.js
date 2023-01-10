const Pessoa = {
    nome: "",
    idade:"",
    getNome: ()=>{
        return this.nome
    },
    getIdade: ()=>{
        return this.idade
    },
    setNome: (nome)=>{
        return this.nome = nome
    },
    setIdade: (idade)=>{
        return this.idade = idade
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = ()=>{
    pessoas.map((el)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${el.getNome()} <br> Idade: ${el.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click", (evt)=>{
    let f_nome = document.querySelector("#nome")
    let f_idade= document.querySelector("#idade")

    const p = Pessoa
    p.setNome(f_nome.value)
    p.setIdade(f_idade.value)

    pessoas.push(p)

    f_nome.value = " "
    f_idade.value = " "

    f_nome.focus()
    addPessoa()
})