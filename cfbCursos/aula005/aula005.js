// Operador Spread - ...

/* EXEMPLO 1
let array1 = [10, 20, 30]
let array2 = [11, 12, 15, 13]
let array3 = [...array1, ...array2]

console.log(`${array1} e ${array2}`)
console.log(array3)*/

/*EXEMPLO 2
const jogador1 = {nome:'Gabriel', energia:100, vidas:3}
const jogador2 = {nome:'Bernardo', energia:100, vidas:5}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)*/

/* EXEMPLO 3
const soma = (v1, v2, v3) => {
    return v1+v2+v3
}

let valores = [1, 5, 4]

console.log(soma(...valores))*/

const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML = 'xesqqq'
});

console.log(objs1)
console.log(objs2)