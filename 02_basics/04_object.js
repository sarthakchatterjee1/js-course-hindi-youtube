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
const obj3 = Object.assign({}, obj1, obj2) //result is {1:"a", 2:"b", 3:"c", 4:"d"}
console.log(obj3);