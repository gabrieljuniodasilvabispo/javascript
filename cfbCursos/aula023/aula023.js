// Removendo um elemento

let conteiner1 = document.querySelector(".conteiner1")
let btn_c = [...document.querySelectorAll(".curso")]
let cursos = ["HTML","CSS","JAVASCRIPT","PHP","REACT","MYSQL","React Native"]

cursos.map((el, chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+chave) // Adicionando o id dinamicamente
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = el

    const btn_trash = document.createElement("img")
    btn_trash.setAttribute("src","./lixeira.png")
    btn_trash.addEventListener("click", (evt)=>{
        conteiner1.removeChild(evt.target.parentNode)
    })

    newElement.appendChild(btn_trash)
    conteiner1.appendChild(newElement)
})