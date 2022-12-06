// Funções geradoras - São funções que retornam um valor antes de sua execução total por meio do yield, porém se chamada novamente executa o bloco até o próximo yield

/*function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)*/

function* perguntas(){
    const nome = yield 'Qual o seu nome ?'
    const esporte = yield 'Qual seu esporte favorito'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next("Bielzin").value)
console.log(itp.next("Basquete").value)

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 10){
            break
        }
    }
}

const itc = contador()

for (c of itc) {
    console.log(c)
}