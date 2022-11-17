var pessoa = {
    nome: 'Pedro',
    getNome: function() {
        return this.nome
    },
    setNome: function(nome) {
        this.nome=nome
    }
}

var p2 = pessoa

p2.setNome("bielzin")

console.log(p2.getNome())