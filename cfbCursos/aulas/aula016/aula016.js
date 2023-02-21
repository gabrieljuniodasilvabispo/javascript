//Pegando elementos pelo seu Id

const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

// Manipulando vários elementos Id de uma vez só

let arrayElementos = [c1, c2, c3, c4, c5, c6]

arrayElementos.map((e)=>{
    e.innerHTML = "Biel te corta"
    console.log(e)
})

// for(f in arrayElementos){
//     console.log(arrayElementos[f])
// }

// for (n of arrayElementos) {
//     console.log(n)
// }

//-------------------------------------------------------------------------------

//Pegando elementos pelo seu TagName

const colecaoHTML = [...document.getElementsByTagName("div")]

colecaoHTML.map((e)=>{
    console.log(e)
})