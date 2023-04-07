/*Enumerable Magic #4 - True for None?

*/

const arr = [1, 3, 5, 7, 9];
const isEven = num => num % 2 === 0;

console.log(none(arr, isEven)); // Output: true

const arr2 = [2, 4, 6, 8, 10];
console.log(none(arr2, isEven)); // Output: false