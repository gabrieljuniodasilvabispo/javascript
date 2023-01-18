// definindo um membro como STATIC
class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log("-------------------")
    }
    static alertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(33)
const npc3 = new Npc(10)

//Npc.alertar()

npc1.info()
npc2.info()
npc3.info()