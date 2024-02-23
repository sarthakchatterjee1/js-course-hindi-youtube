// console.log(2 > 1);

// console.log("2">1); // beacuse it convert string to number but it always not give resultant output
// console.log("2"<1);
// console.log("2"==1);
// console.log("2">true);

// console.log(null > 0); // result => false
// console.log(null == 0); // result => false
// console.log(null >= 0); // result => true
// The reason of the above senario is that an eqality check (==) and 
//             comparison check (>,<,>=,<=) work deferently. Comparison convert null to a number 0.
// thats why (null >= 0) give true and (null > 0) and (null == 0) gives false

// ***********Strict check******
// console.log("2" == 2); // true
// console.log("2" === 2); // false
// strict check is === 
//Strict check not only compare the result after string to number conversionsion. 
// It also check both the data types are same data types or not.  

