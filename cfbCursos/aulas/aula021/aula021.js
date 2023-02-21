// MÉTODO STOPPROPAGATION

let box1 = document.querySelector(".conteiner1")
let c1 = document.querySelector("#c1") 
let cursos = [...document.querySelectorAll(".curso")]

box1.addEventListener("click", (evt)=>{
    console.log("clicou")
    console.log(evt)
    alert("clicou")
})

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation() // Note que sem o stopPropagation o alert é ativado clicando em todos os elementos
    })
})

// c1.addEventListener("click", (evt)=>{
//     evt.stopPropagation()
// })