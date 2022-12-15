// Prática com o método Filter

const boxCursos = document.querySelector("#boxCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","REACT","RUST","RUBY","ASSEMBLY","PHP"]
const btnSelectedCurso = document.querySelector("#btnSelectedCurso")

cursos.map((el, chave)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id", "c"+chave)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    newElement.appendChild(comandos)

    boxCursos.appendChild(newElement)
})

btnSelectedCurso.addEventListener("click",(evt)=>{
    const allRadios = [...document.querySelectorAll("input")]
    const selectedRadios = allRadios.filter((el)=>{
        return el.checked
    })
})