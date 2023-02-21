// Arrow Function - Funcionam basicamente como as funções anônimas

const soma = (v1, v2) => {
    return v1 + v2
}

console.log(soma(10, 5))


// Caso você só precise de uma linha na arrow function e não use return, pode deixar de colocar os parênteses e as chaves
const multiplica = n => n*2
console.log(multiplica(10))