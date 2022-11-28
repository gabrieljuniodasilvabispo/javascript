class contaBanco {
    numConta;
    dono;
    saldo;
    tipo;
    status;

    constructor(){
        this.saldo = 0
        this.status = false
    }
    abrirConta(novoDono, novoTipo){
        this.dono = novoDono
        this.tipo = novoTipo
        this.status = true
        if(tipo == 'corrente'){
            this.saldo = 50
        } else {
            this.saldo = 150
        }
    }
    fecharConta(){
        let situaçao2 = ''
        if(this.saldo == 0){
            this.status = false
        } else if(this.saldo < 0){
            situaçao2 = 'Você não pode fechar com a conta em negativo'
        } else {
            situaçao2 = 'Você mão pode fechaar uma conta ainda com dinheiro nela, retire o dinheiro.'
        }
    }
    depositar(valorDepositado){
        let situaçao = ''
        if(this.status == true){
            this.saldo += valorDepositado
        } else {
            situaçao = 'Abra uma conta'
        }
    }
    sacar(valorSacado){
        let situaçaoSaque = ''
        if(getStatus()){
            if(this.saldo > valorSacado){
                this.saldo -= valorSacado
            } else {
                situaçaoSaque = 'Saldo insuficiente'
            }
        } else {
            situaçaoSaque = 'Abra uma conta primeiro.'
        }
    }
    getNumConta(){
        return this.numConta
    }
    setNumConta(novoValorConta){
        this.numConta = novoValorConta
    }
    getDono(){
        return this.dono
    }
    setDono(novoValorDono){
        this.numConta = novoValorDono
    }
    getSaldo(){
        return this.saldo
    }
    setSaldo(novoValorSaldo){
        this.saldo = novoValorSaldo
    }
    getTipo(){
        return this.tipo
    }
    setTipo(novoTipo){
        this.tipo = novoTipo
    }
    getStatus(){
        return this.status
    }
    setStatus(novoStatus){
        this.status = novoStatus
    }
}


let conta1 = new contaBanco()
let conta2 = new contaBanco()