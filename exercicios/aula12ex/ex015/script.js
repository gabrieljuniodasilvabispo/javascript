function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'imagens/pexels-elias-tigiser-1090745.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/pexels-anderson-martins-2386144.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'imagens/pexels-reynaldo-brigworkz-brigantty-771883.jpg'
        document.body.style.background = '#515154'
    }
}