// Prática com o método Filter

const boxCursos = document.querySelector("#boxCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","REACT","RUST","RUBY","ASSEMBLY","PHP"]
const nameCurso = document.querySelector("#nameCurso")
const btnSelectedCurso = document.querySelector("#btnSelectedCurso")
const btnRemoveCurso = document.querySelector("#btnRemoveCurso")
const btnBefore = document.querySelector("#btnAddNewCursoBefore")
const btnAfter = document.querySelector("#btnAddNewCursoAfter")

let indice = 0

const createNewCourse=(course)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", "c"+indice)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = course

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    newElement.appendChild(comandos)

    return newElement
}

cursos.map((el, chave)=>{
    const newElement = createNewCourse(el)
    boxCursos.appendChild(newElement)
    indice++
})

const selectedRadio=()=>{
    const allRadios = [...document.querySelectorAll("input")]
    const selectedRadios = allRadios.filter((el)=>{
        return el.checked
    })
    return selectedRadios[0]
}

btnSelectedCurso.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Selecione algum curso")
    }
    const selectedCourse = sr.parentNode.previousSibling.textContent
})

btnRemoveCurso.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Selecione algum curso")
    }
    const selectedCourse = sr.parentNode.parentNode
    selectedCourse.remove()
})

btnBefore.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Selecione algum curso")
    }
    const selectedCourse = sr.parentNode.parentNode
    if(nameCurso.value.length==0){
        alert("Digite algum curso")
    }else{
        const newCourse = createNewCourse(nameCurso.value)
        boxCursos.insertBefore(newCourse,selectedCourse)
    }
})

btnAfter.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Selecione algum curso")
    }
    const selectedCourse = sr.parentNode.parentNode
    if(nameCurso.value.length==0){
        alert("Digite algum curso")
    } else{
        const newCourse = createNewCourse(nameCurso.value)
        boxCursos.insertBefore(newCourse,selectedCourse.nextSibling)
    }
})