let num = [5, 8, 2, 9, 3]
num[5] = 4
num.push(1)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições e é ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado')
}
else {
    console.log(`O valor 2 está na posição ${pos}`)
}

