// Parâmetro REST(...) em funções - Parâmetros em que utilizamos o Spread, por consequência os parâmetros se acumulam em um array

function soma(...valores){
    let res = 0
    for (let n of valores) {
        res += n
    }
    return res
}
console.log(soma(10, 5))