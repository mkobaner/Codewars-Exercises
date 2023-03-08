/*Simple multiplication https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

let simpleMultiplication = n => n%2===0? n*8:n*9;

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }