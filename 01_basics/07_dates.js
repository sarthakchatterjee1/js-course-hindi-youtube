let myDate = new Date()
// Date is a object type
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreateDate = new Date(2024, 1, 25)
// console.log(myCreateDate.toDateString());
// Output: Sun Feb 25 2024 : Here january starts from 0, thats why 1 => february
// let myCreateDate = new Date(2024, 1, 25, 5, 3)
// console.log(myCreateDate.toLocaleString());
// Output 2/25/2024 5.03.00 AM
//We can configuier that also but here jam =>01
let myCreateDate = new Date("2024-01-25")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// All the result we got it is milisecond

//To convert it into second we have to do the fllowing 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());




