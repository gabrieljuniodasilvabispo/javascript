const p_array = document.querySelector("#array")
const btnVerify = document.querySelector("#verify")
const result = document.querySelector("#result")

const elementsArray = [25, 4, 8, 20 ,100, 15, 24]

p_array.innerHTML = `[${elementsArray}]`

btnVerify.addEventListener("click",(evt)=>{
    const ret = elementsArray.every((el,i)=>{
        if(el <= 18){
            result.innerHTML = `Array não conforme na posição ${i}`
        }
        return el > 18
    })
    if(ret){
        result.innerHTML = 'Array OK!'
    }
})
