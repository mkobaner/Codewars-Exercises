/*Sum of integers in string https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.*/

function sumOfIntegersInString(s){
    const result = s.match(/\d+/g)
    if(result===null){
        return 0;
    }
    else { return result.reduce((a,b)=> (+a)+(+b), +0)}
    }

/* Match searches for all items in string itdoesnt stop when it finds the first match, /\d is code for regex
digits and g is global so this parameter searches for whole numbers /\w searches for words which is very useful.*/