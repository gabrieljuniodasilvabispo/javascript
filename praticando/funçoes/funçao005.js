console.log('Usando função para chamar outra função')

function somaCallBack(a, b, chamaFuncao) {
    return chamaFuncao(a + b)
}

var multiplica = function(total) {
    return total * 2
}

console.log(somaCallBack(10, 2, multiplica)) // armazenando numa variável

console.log(somaCallBack(5, 2, function(total) { //sem armazenar na variável
    return total + 20
}))