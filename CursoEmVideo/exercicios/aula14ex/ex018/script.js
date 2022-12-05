function tabuada() {
    let n = Number(document.querySelector('input#numero').value)
    let res = document.querySelector('div#res')
    res.innerHTML = ''

    for (let i=0; i < 10; i++) {
        let produto = n * i
        res.innerHTML += `${n} x ${i} = ${produto}<br>`
    }

}