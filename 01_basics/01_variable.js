const accountId = 144553
let accountEmail = "sarthak1@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

//accountId = 2 // not allowed beacuse accountId is constant
accountEmail = "sarthak2@gmail.com"
accountPassword = "12212"
accountCity = "Jaipur"

console.log(accountId);

/*
Preger not to use var 
because  of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])