let box1 = document.querySelector(".conteiner1")
let c1 = document.querySelector("#c1") 
let cursos = [...document.querySelectorAll(".curso")]

box1.addEventListener("click", (evt)=>{
    console.log("clicou")
    console.log(evt)
})

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})

// c1.addEventListener("click", (evt)=>{
//     evt.stopPropagation()
// })