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
    }
    else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores.')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            else if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML += `Essa lista tem ${valores.length} números. <br>`
        res.innerHTML += `O maior valor informado é ${maior} e o menor valor informado é ${menor}. <br>`
        res.innerHTML += `A soma dos valores dessa lista é ${soma}.<br>`
        res.innerHTML += `A média dos valores dessa lista é ${soma/valores.length}.<br>`
    }
}