// Pegando elementos pela sua classe

const AllCursos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[5]

cursosC1.map((element)=>{
    element.classList.add("destaque") // adicionando classe aos elementos pelo javascrpit com .classList e .add
})