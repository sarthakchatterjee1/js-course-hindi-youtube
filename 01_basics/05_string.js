const name = "Sarthak"
const repoCount = 50;
// console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//console.log('Hello my name is ${name} and my repo count is ${repoCount}');


  const gameName = new String('Sar-thak')

  console.log(gameName[0]);
  console.log(gameName.__proto__);

  console.log(gameName.length);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt(3));
  console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);
