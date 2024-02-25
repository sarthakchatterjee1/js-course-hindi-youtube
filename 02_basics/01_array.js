const myArray = ["Sarthak", 0, 1, 2, 3, 4]
console.log(myArray[0])
// in JS we can store any datypes component in a same array

// Array methods
myArray.push(6)
myArray.push("Rahul") // push enter the element in the last of the arrray
myArray.pop() // pop delete the last element

myArray.unshift(9) // unshift enter the element in the begining of the array   
myArray.shift(9) // shift delete the element from the begining of the array  
//console.log(myArray.includes(9)); // It check is the value is available in the array or not
//console.log(myArray.indexOf(3)); // It check is the index number of the element 

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray); // it is a string

console.log(myArray); // ['Sarthak', 0, 1, 2, 3, 4, 6]

console.log("A ", myArray);

const myN1 = myArray.slice(1,3)
console.log(myN1); // Output [0,1]
// slice just copy the part. It doest not affect the orginal array. And it copy the 1st element to the (n-1) the element
console.log(myArray); // ['Sarthak', 0, 1, 2, 3, 4, 6]
console.log("B ", myArray);

const myN2 = myArray.splice(1,3)
console.log("C ", myArray);
console.log(myN2); // [0,1,2]
// splice cut the elements from the array So it affect the orginal array. 
console.log(myArray); // ['Sarthak', 3, 4, 6]