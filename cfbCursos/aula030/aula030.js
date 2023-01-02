const box = document.querySelector("#box")

let musics = new Set(["musica 1", "musica bacana", "musica 10"])

musics.add("musica boa")

console.log(musics)

musics.forEach((el)=>{
    box.innerHTML += `${el}<br>`
})