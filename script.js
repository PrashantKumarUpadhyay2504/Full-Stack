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

