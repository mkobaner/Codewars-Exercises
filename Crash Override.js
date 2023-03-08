/*Crash Override https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.*/
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Alpha', B: 'Beta', C: 'Cache'}
let aliasGen=(a,b)=>{
let fName1 =a.charAt(0).toUpperCase();

let fName2 =b.charAt(0).toUpperCase();
// console.log(fName1+fName2);
return !/^[a-zA-Z]$/.test(fName1)||!/^[a-zA-Z]$/.test(fName2)? 'Your name must start with a letter from A - Z.': `${firstName[fName1]} ${surname[fName2]}`;

} 



aliasGen('charlie','bravo');

//this one is using oop and clearly more dry

const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}

