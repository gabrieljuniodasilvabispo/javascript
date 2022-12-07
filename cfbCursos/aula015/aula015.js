function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function (){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow = function (){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

let aluno1 = new aluno("Bielzin", 93)

aluno1.dados_anonimo()
aluno1.dados_arrow()