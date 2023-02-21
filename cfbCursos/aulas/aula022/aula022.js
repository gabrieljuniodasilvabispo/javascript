// CRIANDO UM NOVO ELEMENTO

let conteiner1 = document.querySelector(".conteiner1")
let btn_c = [...document.querySelectorAll(".curso")]
let cursos = ["HTML","CSS","JAVASCRIPT","PHP","REACT","MYSQL","React Native"]

cursos.map((el, chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave) // Aduicionando o id dinamicamente
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = el
    conteiner1.appendChild(newElement)
})

// let newElement = document.createElement("div")
// newElement.setAttribute("class","curso c1")
// newElement.innerHTML = "React Native"

// conteiner1.appendChild(newElement)