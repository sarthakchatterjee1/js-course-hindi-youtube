const marvar_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman", "flash", "Batman"]

//*********push operator */
// .push marge the elements in the existing array 
// marvar_heros.push(dc_heros)
// console.log(marvar_heros); //["thor", "ironman","spiderman",["superman", "flash", "Batman"]]
// console.log(marvar_heros[3]); // ["superman", "flash", "Batman"]
// console.log(marvar_heros[3][1]); // flash

// *****Concat Operator***
//concatination gives the result in new array without marge the full array rather than marge the elements
const allHeros = marvar_heros.concat(dc_heros)
console.log(allHeros); //["thor", "ironman","spiderman","superman", "flash", "Batman"]

//**Spread Operator */
const allNewHeros = [...marvar_heros, ...dc_heros] // ... is "spread" opearator
console.log(allNewHeros);

//***********flat oprator */
const an1 = [1,2,3,4,[5,6,7],8,[4,5,6,[3,9]]]
const anonther_an1 = an1.flat(Infinity)
console.log(anonther_an1);


console.log(Array.isArray("Sarthak"));
console.log(Array.from("Sarthak")); //Convert into a array like ['S','a','r','t','h','a','k']
console.log(Array.from({name: "Sarthak"})); // it gives empty array becauseit not able to convert it into a array ** Importent for interview

// ****** .of operator for convert variables into array**********
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2, score3));
