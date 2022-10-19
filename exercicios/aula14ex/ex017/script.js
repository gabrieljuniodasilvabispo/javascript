function contador(){
    var inicio = document.getElementById('numero') // número inicial
    var fim = document.getElementById('final') // número final
    var passo = document.getElementById('passo') // Passo a passo da contagem
    var res = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO!!] Faltam dados')
    }
    else if (passo.value.length < 0) {
        window.alert('[ERRO!!] O passo não pode ser menor que zero')
    }
    else {
        var ni = Number(inicio.value)
        var nf = Number(fim.value)
        var p = Number(passo.value)
        

        if (p == 0) {
            window.alert('Não é possível uma contagem com o passo 0, ele passará a valer 1')
            p = 1
        }

        while (ni <= nf) {
            ni += p
            res.innerHTML += `${ni}\u{1F449}`
        }
        res.innerHTML += '\u{1F3C1}'
    }
}