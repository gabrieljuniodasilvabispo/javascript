const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")
let res = document.querySelector("#res")

let op = [
    (v1, v2)=>{
        return Number(v1) + Number(v2)
    },
    (v1, v2)=>{
        return Number(v1) - Number(v2)
    },
    (v1, v2)=>{
        return Number(v1) * Number(v2)
    },
    (v1, v2)=>{
        return Number(v1) / Number(v2)
    }
]

soma.addEventListener("click",(evt)=>{
    res.innerHTML = op[0](valor1.value, valor2.value)
})
subtracao.addEventListener("click",(evt)=>{
    res.innerHTML = op[1](valor1.value, valor2.value)
})
multiplicacao.addEventListener("click",(evt)=>{
    res.innerHTML = op[2](valor1.value, valor2.value)
})
divisao.addEventListener("click",(evt)=>{
    res.innerHTML = op[3](valor1.value, valor2.value)
})
