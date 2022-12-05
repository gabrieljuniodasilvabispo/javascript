function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!!] Verifique os dados e tente novamente')
    } 
    
    else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança 
                img.setAttribute('src', './imagens/bebe-masculino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/bebe-feminino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/adulto-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}