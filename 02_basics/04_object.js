//const tinderUser = new Object() //this is a singleton object 
const tinderUser = {} // This is a non singleton object
// In both way we can decleare object but remember the difference

tinderUser.id = "123abc",
tinderUser.name = "Sam",
tinderUser.isLogggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName:{
            firstName: "Sarthak",
            lastName: "Chatterjee"
        }

    }
}

//console.log(regularUser.fullName.userfullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = {obj1, obj2} //result is {obj1: {1:"a", 2:"b"}, obj2: {1:"c", 2:"d"}}
//const obj3 = Object.assign({}, obj1, obj2) //result is {1:"a", 2:"b", 3:"c", 4:"d"}

const obj3 = {...obj1, ...obj2} // By using spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "S1@gmail.com"
    },
    {
        id: 2,
        email: "S2@gmail.com"
    },
    {
        id: 3,
        email: "S3@gmail.com"
    }
]

console.log(users[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // In this way we can find keys in array format
console.log(Object.values(tinderUser)); // In this way we can find valus in array format
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogggedIn')); // It will find if any kind of property is present in the objet or not

