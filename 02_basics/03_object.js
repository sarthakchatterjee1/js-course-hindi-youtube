//singleton is a object 
/*
 if we delclear using leaterals then singleton not occour but if we decleare using constractor then singleton occour.
*/
// Object leterals:

//Object.create ==> This meethod is known as constractor meethod and singleton happen in this process.

// Symbol
const mySym = Symbol("key1")

const Jsuser = {
    name: "Sarthak",
    "Full name":"Sarthak Chatterjee",
    age: 24,
    [mySym]: "myKey1",
    location: "Kolkata",
    email: "sarthakchatterjee1@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Sunday"]

}

// various ways to use object values
// console.log(Jsuser.age)
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser.mySym); // in this way we just calling the parameter of the object
// console.log(Jsuser[mySym]);  // In this way we can use the parameter as a key value.

//Way to change the value of a object
Jsuser.email = "sarthakchatterjee@google.com";
// console.log(Jsuser.email);

// To freeze any value of a object means no one can change the value further
// Object.freeze(Jsuser)
// Jsuser.email="sarthakchatterjee@microsoft.com"
// console.log(Jsuser.email); // Here new email will not update.The previous email id only be consider. 

// console.log(Jsuser);

//Functions
Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name} `);
}

console.log(Jsuser.greetingTwo());