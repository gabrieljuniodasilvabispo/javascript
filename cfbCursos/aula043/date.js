const div_data = document.querySelector("#div_data")

const data = new Date()

div_data.innerHTML = data.getDate()

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