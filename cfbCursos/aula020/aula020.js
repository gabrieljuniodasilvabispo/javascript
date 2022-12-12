const conteiner1 = document.querySelector(".conteiner1")
const conteiner2 = document.querySelector(".conteiner2")
const copyButton = document.querySelector(".copybutton")
const removeButton = document.querySelector(".removebutton")
const allCursos = [...document.querySelectorAll(".curso")]

allCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selected")
    })
})

copyButton.addEventListener("click",(el)=>{
    const selectedCursos = [...document.querySelectorAll(".selected")]
    selectedCursos.map((el)=>{
        conteiner2.appendChild(el)
    })
})

removeButton.addEventListener("click", (el)=>{
    const selectedRemoveCursos = [...document.querySelectorAll(".selected")]
    selectedRemoveCursos.map((el)=>{
        conteiner1.appendChild(el)
    })
})