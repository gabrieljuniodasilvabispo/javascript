// Prática com o método Filter

const boxCourse = document.querySelector("#boxCourse")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const coursies = ["HTML","CSS","REACT","RUST","RUBY","ASSEMBLY","PHP"]
const nameCourse = document.querySelector("#nameCourse")
const btnSelectedCourse = document.querySelector("#btnSelectedCourse")
const btnRemoveCourse = document.querySelector("#btnRemoveCourse")
const btnBefore = document.querySelector("#btnAddNewCourseBefore")
const btnAfter = document.querySelector("#btnAddNewCourseAfter")

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

coursies.map((el, chave)=>{
    const newElement = createNewCourse(el)
    boxCourse.appendChild(newElement)
    indice++
})

const selectedRadio=()=>{
    const allRadios = [...document.querySelectorAll("input")]
    const selectedRadios = allRadios.filter((el)=>{
        return el.checked
    })
    return selectedRadios[0]
}

btnSelectedCourse.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Select any course")
    }
    const selectedCourse = sr.parentNode.previousSibling.textContent
})

btnRemoveCourse.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Select any course")
    }
    const selectedCourse = sr.parentNode.parentNode
    selectedCourse.remove()
})

btnBefore.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Select any course")
    }
    const selectedCourse = sr.parentNode.parentNode
    if(nameCourse.value.length==0){
        alert("write any course")
    }else{
        const newCourse = createNewCourse(nameCourse.value)
        boxCourse.insertBefore(newCourse,selectedCourse)
    }
})

btnAfter.addEventListener("click",(evt)=>{
    const sr = selectedRadio()
    if(sr==undefined){
        alert("Select any course")
    }
    const selectedCourse = sr.parentNode.parentNode
    if(nameCourse.value.length==0){
        alert("write any course")
    } else{
        const newCourse = createNewCourse(nameCourse.value)
        boxCourse.insertBefore(newCourse,selectedCourse.nextSibling)
    }
})