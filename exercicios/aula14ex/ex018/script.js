function tabuada() {
    var n = document.querySelector('input#numero').value
    var res = document.querySelector('div#res')
    Number(n)

    for (var i=0; n < 10; i++) {
        var produto = n * i
        res.innerHTML += `${n} x ${i} = ${produto}`
    }
}