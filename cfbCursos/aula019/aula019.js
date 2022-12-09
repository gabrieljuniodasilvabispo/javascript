/*const c1 = document.querySelector("#c1")

// const msg = () => {
//     alert('clicou')
// }

// c1.addEventListener('click', msg)

c1.addEventListener('click', (evt) => {
    const elemento = evt.target
    elemento.classList.add("destaque")
})*/

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(`${el.id} foi clicado`)
    })
})
