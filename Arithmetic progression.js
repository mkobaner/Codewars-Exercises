/* Arithmetic progression  https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"*/

// p always a number wholle number negative olur mu ? farklı bir şey gelir MimeTypeArray

// console log mu lazım  başka birşey yapmıycam

// bir örnek vereyim mesele 

function arithmeticSequenceElements(a,b,c){
//create the result string
let result='';
let curValue=a;
result=`${a}`
//loop starts from a increae by 1 and goes up to 1
for( n=1;n<c;n++){
curValue=curValue+b;
result=result+`, ${curValue}`;
}

return `${result}`;
// inside the loop i need to  add a+b as current value than add it to result string
}


fizzBuzz(1,3,6) 1,4,7,11,14,17 dogru mu 


