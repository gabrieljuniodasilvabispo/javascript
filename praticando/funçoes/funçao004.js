console.log('Colocando função dentro de variáveis')

var subtraiNumeros = function subtrai(a, b) {
    return a - b 
}

console.log(subtraiNumeros(10, 5))

/* Note que ao fazermos isso, o nome que passa a valer para a função é o nome da variável, logo o nome da função, nesse caso o "subtrai" passa a ser inútil.

Para isso temos as funções anônimas, que são funções sem nome. */

var subtraiNumeros = function (a, b) {
    return a - b 
}

console.log(subtraiNumeros(5, 1))