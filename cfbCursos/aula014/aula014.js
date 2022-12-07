// Método map()

//const cursos = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'C++']
// cursos.map((el, i)=>{
//     console.log(`Curso: ${el} - Posição do curso ${i}`)
// })

// let el = [...document.getElementsByTagName('div')]

// el.map((e, i)=>{
//     console.log(e.innerHTML)
// })

// let el2 = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el2, ({innerHTML})=>innerHTML) 

// console.log(val)

const convertInt = (e)=>parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(convertInt)

console.log(num)