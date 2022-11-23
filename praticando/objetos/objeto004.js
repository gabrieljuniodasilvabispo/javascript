class Pessoa {
    nome;
    peso;
    altura;
    imc;
    static totalPessoas = 0
    constructor(n, p, a){
        this.nome = n
        this.peso = p
        this.altura = a
        this.imc = (this.peso / (this.altura * this.altura))

        Pessoa.totalPessoas += 1
    }
    calculaImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }
    classificaImc(){
        let valorImc = this.imc
        let classificaçao = ''

        if(valorImc < 18.5){
            classificaçao = 'Abaixo do Peso'
        } else if(valorImc <= 24.9){
            classificaçao = 'Peso normal'
        } else if(valorImc <= 29.9){
            classificaçao = 'Sobrepeso'
        } else if(valorImc <= 34.9){
            classificaçao = 'Obesidade grau I'
        } else if(valorImc <= 39.9){
            classificaçao = 'Obesidade grau II'
        } else if(valorImc >= 40){
            classificaçao = 'Obesidade grau III'
        } else {
            classificaçao = 'Peso inválido'
        }
        return classificaçao
    }
    getNome(){
        return this.nome
    }
    setNome(novoNome){
        this.nome = novoNome
    }
    getpeso(){
        return this.peso
    }
    setpeso(novoPeso){
        this.peso = novoPeso
    }
    getaltura(){
        return this.altura
    }
    setaltura(novaAltura){
        this.altura = novaAltura
    }
    gettotalPessoas(){
        return Pessoa.totalPessoas
    }
}

let pessoa1 = new Pessoa('Evandro', 50, 1.86)
let pessoa2 = new Pessoa('Lucas', 78, 1.32)
let pessoa3 = new Pessoa('Nascimento', 43.4, 2.00)
let pessoa4 = new Pessoa('Matias', 50, 1.28)

pessoa1.setNome('Brelelele')

console.log(pessoa1.calculaImc())
console.log(pessoa4.classificaImc())

console.log(Pessoa.totalPessoas)