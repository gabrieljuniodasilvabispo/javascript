class contaBanco {
    numConta;
    dono;
    saldo;
    tipo;
    status;

    constructor(conta, dono, tipo){
        this.numConta = conta
        this.dono = dono
        this.tipo = tipo
        this.saldo = 0
        this.status = false
    }
    abrirConta(novoDono, novoTipo){
        this.dono = novoDono
        this.dono = novoTipo
        this.status = true
        this.saldo = 0
    }
    fecharConta(){
        this.status = false
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
        this.saldo -= valorSacado
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


let conta1 = new contaBanco(1, 'José', 'poupança')
let conta2 = new contaBanco(2, 'Cleusa', 'corrente')