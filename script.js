//   Java Script : 
//  1. To built logical web page .

// Primitive : String , Number , Boolean , undefined , null , Symbol , BigInt.'

var name ='Piyush'
var num = 123
console.log(name)


// var vs let vs const
/*
var : 

adv: we can redeclare and reassign same variable .
*/
var name1 = 'gla'
var name1 = 'Mathura'

/*
let :
    1. in let , we can't redeclare but we can reassign with same variable. 
*/

let num1="jfie"
num1 = "Mathura"
console.log(num1)

/*
const : 
    1.we can't redeclare and reassign with same variable . 
*/

const pi=3.14
console.log(pi)

/*
 Undefined */
 let nam1
 console.log()
 
 /*not defined */
 console.log(nam1)
 /*
 Null
*/

let sr=50
let to=sr==50
console.log(to)

/* Operators
== vs ===
*/
// ==
console.log('5'==5)

//===
console.log('5'===5)

// Disision
// if.. else Statement
let score=50
if(score>40){
    console.log("hello")
}else{
    console.log("hiii")
}
//Ternaryt Operator
let istrue=true;
istrue?console.log("hello"):console.log("hi")


//Question : 
let score1=80
if(score1>=80){
    console.log("pass")
}else if(score1<80 && score1>=70){
    console.log("nice")
}else{
    console.log("failed")
}


//Functions

// argument 


/*paramenter

eg:  function add(num)

*/

function add(info) // parameter
{
    console.log(info);
    console.log(info.name);
    console.log(info.a);
}

let obj  ={
    name:"Piyush",
    Roll_No: 201500505,
    Contact:8077122833
}

add(obj)

let add1= {
    java: 50,
    fulls: 60,
    sum: function(){
        console.log(this.java + " " + this.fulls)
    }
}

add1.sum()
// another way for function declaration 
const hi = ()=>{
    return 1;
}

// Array : it is a container which can store any kind of datatype 

let arr= [10,"hello",4.5,'v',true]
console.log(arr)

// Loop: 

for(let i =0 ; i<10 ; i++){
    console.log(i)
}

let arr1 = [1,2,3,4,5,6,7]


//  for in Loop is for index so that's why its starts from  0 : 

for(let i in arr1){
    console.log(i)

}

//  for of Loop is for value or element to print : 
for(let i of arr1){
    console.log(i)
}

// foreach loop is mixture of forin and forof.
// it does not return any result

// eg:1
let ar1=[1,2,3,4,5,6]
ar1.forEach((ele,index, ar1)=>{
    console.log(ele,index,ar1)
})

// eg:2
let n=ar1.forEach((ele,index, ar1)=>{
    // console.log(ele,index,ar1)
    return ele
})
console.log(n)

// Map is also use for array printing . it can return the result

let ar2=[1,2,3,4,5]

let new1= ar2.map((ele,index,ar2)=>{
    return ele
})

console.log(new1)

// filter :  it is way for filtering the unwanted element from array
ar2=[1,2,3,4,5]
let new2= ar2.filter((ele)=>{
    return ele>3
})

console.log(new2)

// reduce
ar2=[1,2,3,4,5]

let sum= ar2.reduce((a,b,)=>{
    return a+b;
})

console.log(sum)


/*
javascript is synchronous but it behaves asynchronous

*/
// Scope 1. Global variable 2. Local Variable

var a= 5
function add(){
    console.log(a)
}

add()


{
    const a1=90
    let b=5
}

// console.log(a1)
console.log(b)

// console.log(c)
// var d = 5
let c=5


console.log(c)


// higher order function : 
function a(fn){
    console.log('inside a')
    fn()
}

function b(){
    console.log("inside b")
}


// a(b)


function a(){
    console.log('a')
    function b(){
        console.log('b')
    }
    return b
}

// a()
// or 
// a()()
// or 
// let k=a()
// console.log(k)
// k()

let arr2=[1,2,3,4,'piyush','Raman',true]

// function filtering(){
//     var res=[]
//     for(let item of arr2){
//         if(typeof item == "string"){
//             res.push(item)
//         }
//     }
//     console.log(res)
// }

// filtering()


function getstring(item){
    return typeof item == 'string'
}

function getNumbers(item){
    return typeof item == 'number'
}


function get (arr,getString){
    var res= []
    for( let item of arr){
        if(getString(item)){
            res.push(item)
        }
    }
    return res
}

console.log(get(arr2,getstring))
console.log(get(arr2,getNumbers))


function outer (){
    let user ='gla'
    function inner(){
        console.log(user)
    }
    // inner()
    return inner
}

let inner=outer()
console.log(inner())


// Closer : 

// synchronous 
console.log("3")

console.log("4")

console.log("5")

// asynchronous: (not in order ) in that case , we use stack and queue

console.log("3")

setTimeout(()=>{
    console.log("4")
},4000)

setTimeout(()=>{
    console.log("2")
},0)

console.log("5")



// call back hell

// function step1(step2){
//    setTimeout(()=>{console.log('Photo selected!!')},4000) 
// }

// function step2(){
//     setTimeout(()=>{
//         console.log("filter apply ho chuka hain")
//         return 'fiterInteger'
//     },3000)
//     step1(()=>{
//         step2()
//     })
// }

// function step3(){
//     setTimeout(()=>{
//         console.log("Caption ho gya ")
//         return 'captionImage'
//     },2000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('uploaded')
//     },2000)
// }

// var Image = step1()
// let filteredImage = step2(Image)
// let captionImage = step3(filteredImage)
// step4(captionImage)

// Promises

let prom = new Promise((resolve,reject)=>{
    // resolve('resolve')
    // reject('reject')
    
    let isbool=true
    if(isbool){
        resolve('resolve')
    }else{
        reject('reject')
    }
    
})
// For resolve :- 
prom.then((data)=>{
    console.log(data)
})

// for reject :- 
prom.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})