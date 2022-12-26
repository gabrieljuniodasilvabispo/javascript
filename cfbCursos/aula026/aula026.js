const p_array = document.querySelector("#array")
const txt_search = document.querySelector("#txt_search")
const btnSearch = document.querySelector("#btnSearch")
const result = document.querySelector("#result")

const elementsArray = [2, 4, 8, 20 ,100, 15, 24]

p_array.innerHTML = `[${elementsArray}]`

btnSearch.addEventListener("click",(evt)=>{
    result.innerHTML = 'Valor não encontrado'
    const ret = elementsArray.find((el, i)=>{
        if(el == txt_search.value){
            result.innerHTML = `Valor pesquisado ${el} na posição ${i}`
            return el
        }
    })
})