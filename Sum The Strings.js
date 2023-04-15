/* Sum The Strings https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1) */

sumStr=(a,b)=>a==''||isNaN(a)?(parseInt(0)+parseInt(b)).toString():b==''||isNaN(b)?(parseInt(a)+parseInt(0)).toString():(parseInt(a)+parseInt(b)).toString()

//too much repetition this is the first time i realize trying to use oneliner is making the codewet and also it doesnt pass all the tests 

sumStr=(a,b)=>{
    if(a==''||isNaN(a)){
        a='0'
    }
    if(b==''||isNaN(b)){
        b='0'
    }
    return ((parseInt(a)+parseInt(b)).toString())

}

//well Number and String method could be simpler :) **
sumStr=(a,b)=>String(Number(a)+Number(b));

//this one is interesting thats another way for String and Number

sumStr=(a,b)=>(+a+ +b)+''

