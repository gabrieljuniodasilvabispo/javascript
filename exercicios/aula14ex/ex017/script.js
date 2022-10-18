var ni = document.getElementById('numero') // número inicial
var nf = document.getElementById('final') // número final
var p = document.getElementById('passo') // Passo a passo da contagem
var n = inicio + passo // variável com o inicio e o passo
var res = document.getElementById('resultado')

function contador(){
    if (ni < nf) {
        res.innerHTML = 'xesq'
    }
}