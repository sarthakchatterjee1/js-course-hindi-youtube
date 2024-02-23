"use strict"; // treat all JS code as newr version

// alert(3+3) // we are using node.js not browser

console.log(3+3)
console.log("Sarthak")

/*
number 
bigint
string => " "
boolean => true/false
null => standalone value 
undefined 
symbol => unique 

object
*/


console.log(typeof "Sarthak") // ans string
console.log(typeof null) // ans: Object
console.log(typeof undefined) // ans: Undfined
// Type of null is 'Object'(Importent question for interview)

const BigNumber = 75748976757567485n
//Data type of Bigint is bigint
console.log(typeof BigNumber);

const heros = ["Ram", "Sita", "Hanuman"]
// point to note data type of array is object
console.log(typeof heros)

const myFunction = function(){
    console.log("Hello Eorld")
}
// data type of funcion is function
console.log(typeof myFunction)