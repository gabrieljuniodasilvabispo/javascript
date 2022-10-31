let soma = 0
let array = [1, 2, 3, 4]

function somaVetor(a) {
    for (let pos in array) {
        soma += array[pos]
    }
    return a
}

somaVetor(array)
console.log(`A soma dos valores nesse vetor é ${soma}`)