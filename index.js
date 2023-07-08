// document 
// console.log(document)
// let ele= document.getElementsById('id')
// console.log(ele)

// let ele1 =document.getElementsByClassName('class')
// console.log(ele2)

// let ele2 =document.getElementsByTagName('h1')
// console.log(ele3)


// let ele3 =document.querySelector('.class')
// for(let item of ele){
//     item.style.color='red'
// }

// console.log(ele3.innerText)

// // console.log(ele4)

// // ele3.style.color='red'


// document.querySelectorAll('h1')
// console.log(ele5)


// const func1=()=>{
//     console.log('hello')
// }

// another way for 
// const ele=document.querySelector('button')

// ele.onclick=function(){
//     console.log("hello sir ")
// }

// let ele = document.querySelector('div')
// let h1 = document.createElement('h1')
// let h2 = document.createElement('h1')
// let h3 = document.createElement('h1')
// h1.innerText='bye'
// ele.appendChild(h1) // only of single variable 
// ele.append(h2,h3)// multiple variable
// console.log(ele)

let inputE=document.querySelector('input')
let h2 = document.querySelector('h1')

inputE.addEventListener('input',function(event){
    // console.log(event.target.value)
    h1.innerText=event.target.value
})
