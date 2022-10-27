let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []
let soma = 0
let media = 0

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)

        while (Number(num.value) != -1) {
            soma = soma + Number(num.value)
            media = soma / i++  
        }
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() {
    res.innerHTML += `Essa lista tem ${valores.length} números. <br>`
    res.innerHTML += `O maior número dessa lista é ${valores}. <br>`
    res.innerHTML += `A soma dos valores dessa lista é ${soma}<br>`
    res.innerHTML += `A média dos valores dessa lista é ${soma/valores.length}<br>`
}