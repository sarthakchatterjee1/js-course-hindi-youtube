/*
How to store data and acesss the data on the basis of this it have two catgory

1. Premative:
It is a call by value data-types. It is 7 types they are. string, number, boolean, null, undefined, Symbol,BigInt

const name = "Sarthak"

const score = 100
const score = 100.3

const IsLoggedIn = false
const IsLoggedIn = true

const outsideTemp = null
null means null it does not means its value is zero. It means it is empty.

const userEmail; // Here also value of userEmail is undefined
const userEmail = undefined;

const Id = symbol('123')
const AnotherId = symbol('123')
// note to remember here, Id and AnotherId is not same.
console.log(Id == AnotherId) // ans is False

const BigNumber = 123456789987n


2. Refference or Non-premetive data types:
It is a call by reference data-types. It is 3 types they are, array, Objects and function.

const heros = ["Ram", "Sita", "Hanuman"]

let MyObj = {
    name: "Sarthak";
    age: 23;
}

const myFunction = function(){
    console.log("Hello Eorld")
}
*/