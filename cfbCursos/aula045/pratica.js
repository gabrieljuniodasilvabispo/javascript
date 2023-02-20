const palco = document.querySelector("#palco")
const num_objetos = document.querySelector("#num_objetos")
const txt_qntd = document.querySelector("#txt_qntd")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0