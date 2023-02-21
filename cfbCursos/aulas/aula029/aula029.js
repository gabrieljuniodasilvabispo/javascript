const box = document.querySelector("#box")

let mapa = new Map()

mapa.set("curso1", "python")
mapa.set("curso2", "C++")
mapa.set("curso3", "MySQL")

box.innerHTML = mapa.get("curso1")

mapa.forEach((el)=>{
    console.log(el)
})