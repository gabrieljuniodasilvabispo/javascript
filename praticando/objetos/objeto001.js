var usuario = {
    nome: 'Gabriel',
    idade: 19,
    profissao: 'Estudante',
    competencias: {
        formação: ['Técnico', 'Programador']
    }
}

delete usuario.idade
usuario.ano = 2022
usuario.hobbies = ['Jogar', 'Viajar', 'Cantar']

console.log(usuario)