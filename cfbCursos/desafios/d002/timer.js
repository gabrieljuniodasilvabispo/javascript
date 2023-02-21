//--------------------Obtendo os elementos do HTML-----------------------
const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector("#div_relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const hora_alarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

//--------------------Criando o som do alarme-----------------------
let som_alarme = new Audio("buzzer.wav")
som_alarme.loop = -1
let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

//--------------------Configurando botões ativar e parar----------------------

btn_ativar.addEventListener("click",()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)

    let dt_hora = dt_alarme.getHours()
    dt_hora = dt_hora<10?"0"+dt_hora:dt_hora
    let dt_minutos = dt_alarme.getMinutes()
    dt_minutos = dt_minutos<10?"0"+dt_minutos:dt_minutos
    let dt_segundos = dt_alarme.getSeconds()
    dt_segundos = dt_segundos<10?"0"+dt_segundos:dt_segundos
    let dt_tempo_completo = dt_hora+":"+dt_minutos+":"+dt_segundos

    hora_alarme.innerHTML = "Hora do alarme:"+dt_tempo_completo
})

btn_parar.addEventListener("click",()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

//--------------------Criando data e hora do relógio-----------------------
const data = new Date()

let dia = data.getDate()
dia = dia<10?"0"+dia:dia

let mes = data.getMonth()
mes = mes<10?"0"+mes:mes

let data_r = dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML = data_r

const relogio=()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0"+hora:hora
    let minutos = data.getMinutes()
    minutos = minutos<10?"0"+minutos:minutos
    let segundos = data.getSeconds()
    segundos = segundos<10?"0"+segundos:segundos

    let hora_completa = hora+":"+minutos+":"+segundos
    div_relogio.innerHTML = hora_completa

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)