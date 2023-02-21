const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#reduzir")
const result = document.querySelector("#result")

const elementsArray = [1,2,3,4,5]
let ant = []
let atu = []

p_array.innerHTML = `[${elementsArray}]`

btnReduzir.addEventListener("click",(evt)=>{
    result.innerHTML = elementsArray.reduce((anterior,atual,indice)=>{
        ant.push(anterior)
        atu.push(atual)
        return anterior + atual
    })
    result.innerHTML += `<br>Valor anterior: ${ant} <br> Valor atual: ${atu}`
})
