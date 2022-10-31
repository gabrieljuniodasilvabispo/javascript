console.log('Usando função para chamar outra função')

function somaCallBack(a, b, fnCallBack) {
    return fnCallBack(a + b)
}

var multiplica = function(total) {
    return total * 2
}

console.log(somaCallBack(10, 2, multiplica))

console.log(somaCallBack(5, 2, function(total) {
    return total + 20
}))