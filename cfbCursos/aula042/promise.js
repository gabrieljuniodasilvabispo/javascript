const div = document.querySelector(".numero")

let promessa = new Promise((resolve, reject)=>{
    let resultado = true
    let tempo = 3000

    setTimeout(()=>{
       if(resultado){
            resolve("Deu tudo certo")
       } else {
            reject("Deu tudo errado")
       }
    },tempo)
})

promessa.then((retorno)=>{ // O retorno receberá o resolve da Promise
    div.innerHTML = retorno
    div.classList.remove("erro")
    div.classList.add("ok")
})

promessa.catch((retorno)=>{ // O retorno receberá o reject da Promise
    div.innerHTML = retorno
    div.classList.remove("ok")
    div.classList.add("erro")
})

div.innerHTML = "Processando..."