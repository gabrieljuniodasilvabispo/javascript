function tabuada() {
    var n = document.querySelector('input#numero').value
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    Number(n)

    for (var i=0; i < 10; i++) {
        var produto = n * i
        res.innerHTML += `${n} x ${i} = ${produto}<br>`
    }

}