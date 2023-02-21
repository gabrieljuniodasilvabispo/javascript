const pessoa = {
    nome: 'Bielzin',
    idade: 19,
    curso: 'JavaScript',
    aulas: {
        aula01: 'Variáveis',
        aula02: 'Métodos',
        aula03: 'Condicional'
    }
}

const s_json = JSON.stringify(pessoa) // Converte o objeto em string

const o_json = JSON.parse(s_json) // converte string em objeto

// ABRA NO NAVEGADOR PARA VER A DIFERENÇA
console.log(pessoa)
console.log(s_json)
console.log(o_json)