/*Add Length https://www.codewars.com/kata/559d2284b5bb6799e9000047
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element */

// function addLength(str) {
//     let arr=str.split(' ');
//     arr.forEach((element, index) => {
//         element[index]=`${element[index]} ${element[index].length}`
//     });
//     return arr;
//     }
//this one doesnt work for some reason not sure why really since basicly want to go over each item of array after splitill try map    

const addLength= str=> str.split(' ').map(word => `${word} ${word.length}`);
addLength('Hello World');