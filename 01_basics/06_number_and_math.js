   const score = 100;
//    console.log(score)

   const balance = new Number(100)
//    console.log(balance);

//    console.log(balance.toString().length);
//    console.log(typeof(balance));
   //console.log(balance.toFixed(2));

   const otherNumber = 123.8565
   //console.log(otherNumber.toPrecision(4));
   // .toPrecession used to give the precisse value of the number upto the given length

   const hundreeds = 1000000
   //console.log(hundreeds.toLocaleString('en-IN'));

   //*********MATH************

//    console.log(Math);
//    console.log(Math.abs(-4));
//    //.abs convert the value in absolute value means negative value converted into positive value.
//    console.log(Math.round(4.4)); // ans is 4
//    console.log(Math.round(4.6)); // ans is 5
// // .round gives the round figure value

// console.log(Math.ceil(4.6)); // ans is 5
// //.ceil alwyas gives the upper value of the nuber 
// console.log(Math.floor(4.6)); // ans is 4
// //.floor alwyas gives the lower value of the nuber 

// console.log(Math.sqrt(4)); // ans 2
// //.sqrt gives the sqare root of a given number 
// console.log(Math.pow(4,2)); // ans 16
// // .pow gives the power of the given number

// console.log(Math.min(4, 3, 2, 9));
// // give minimum value
// console.log(Math.max(4, 3, 2, 9));
// // gives maximum value

// console.log(Math.random());
// // always gives random value inbetween (0 - 1)
// console.log(Math.floor((Math.random()*10) + 1));
// gives the floor value


const min = 1000
const max = 10000

console.log(Math.floor((Math.random() * (max-min + 1)) + min))
// In this way way we can  generate 4 digit otp 