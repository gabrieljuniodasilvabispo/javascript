const olhos = [...document.querySelectorAll(".olho")]

let posX_mouse = 0
let posY_mouse = 0

window.addEventListener("mousemove",(evt)=>{
    let posX_mouse = evt.clientX
    let posY_mouse = evt.clientY

    let rot = Math.atan2(posY_mouse, posX_mouse) * 180 / Math.PI

    olhos.map((el)=>{
        el.style.transform = "rotate("+rot+"deg)"
    })
})