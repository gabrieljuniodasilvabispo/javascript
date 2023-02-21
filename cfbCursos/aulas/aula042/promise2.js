const div = document.querySelector(".numero")
const btn_promessa = document.querySelector("#btn_promessa")

div.innerHTML = "Esperando..."

// btn_promessa.addEventListener("click",(evt)=>{
//     div.innerHTML = "Processando..."
//     promise()
// })

// const promise = ()=>{
//     let promessa = new Promise((resolve, reject)=>{
//         let resultado = true
//         let tempo = 3000
    
//         setTimeout(()=>{
//            if(resultado){
//                 resolve("Deu tudo certo")
//            } else {
//                 reject("Deu tudo errado")
//            }
//         },tempo)
//     })
    
//     promessa.then((retorno)=>{ // O retorno receberá o resolve da Promise
//         div.innerHTML = retorno
//         div.classList.remove("erro")
//         div.classList.add("ok")
//     })
    
//     promessa.catch((retorno)=>{ // O retorno receberá o reject da Promise
//         div.innerHTML = retorno
//         div.classList.remove("ok")
//         div.classList.add("erro")
//     })
// }


//---------------------PEGANDO RETORNO DA PROMISE DENTRO DE UMA FUNÇÃO----------------------------

btn_promessa.addEventListener("click",(evt)=>{
    div.innerHTML = "Processando..."
    promise()
     .then((retorno)=>{ // O retorno receberá o resolve da Promise
        div.innerHTML = retorno
        div.classList.remove("erro")
        div.classList.add("ok")
     })      
     promessa.catch((retorno)=>{ // O retorno receberá o reject da Promise
        div.innerHTML = retorno
        div.classList.remove("ok")
        div.classList.add("erro")
     })
})

const promise = ()=>{
    let p = new Promise((resolve, reject)=>{
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
     return p
}