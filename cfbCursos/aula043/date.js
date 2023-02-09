const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector("#div_relogio")

const data = new Date()
console.log(data)
console.log(data.toDateString())
console.log(`Dia: ${data.getDate()}`)

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
}

const intervalo = setInterval(relogio,1000)

// getDate() = Dia do Mês
// getDay() = Dia da semana (número)
// getFullYear() = Ano em 4 dígitos
// getHours() = Horas
// getMiliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = O número do mês (de 0 a 11)
// getSeconds() = Segundos
// getTime() = Time Stamp (milisegundos desde 1 de janeiro de 1970)
// Date.now() = Time Stamp (milisegundos desde 1 de janeiro de 1970)
// getTimezoneOffset() = Timezone(fuso horário) da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define as horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMiliseconds() = Define milisegundos
// toDateString() = Retorna somente a data