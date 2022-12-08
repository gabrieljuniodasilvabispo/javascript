// Pegando elementos pelo querySelector

const AllDivs = [...document.getElementsByTagName("div")]
const AllCursos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

//const query_Alldivs = [...document.querySelectorAll("div[class]")]
const query_Alldivs = [...document.querySelectorAll("div > p")]
const query_Allcursos = [...document.querySelectorAll("div.curso, p")]
const query_cursoEspecial = document.querySelector("div#c1")

console.log(query_Alldivs)