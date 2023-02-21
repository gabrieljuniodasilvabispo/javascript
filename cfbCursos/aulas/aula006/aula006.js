// FORN IN e FOR OF - Usado para percorrer coleções(arrays)

/*let numeros = [10, 20, 30, 50, 60, 80]

for(let a = 0; a < numeros.length; a++){ // Forma com o FOR simples de percorrer uma coleção
    console.log(numeros[a])
}

for(n in numeros) { // o FOR IN relaciona a variável de controle(n) à posição em que está o elemento
    console.log(numeros[n])
}

for(i of numeros){ // o FOR OF já relaciona a variável de controle diretamente ao elemento do array
    console.log(i)
}*/

let objs = document.getElementsByTagName("div")

for(o of objs){
    console.log(o.innerHTML = "BIELZIN")
}

for(o in objs){
    console.log(objs[o])
}