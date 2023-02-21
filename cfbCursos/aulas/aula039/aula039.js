// Uso de prototype

const Nave = function(energia){
    this.energia = energia
    this.disparos = 20
}

const n1 = new Nave(50)

Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(n1.disparos)