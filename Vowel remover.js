/*Vowel remover https://www.codewars.com/kata/5547929140907378f9000039
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */

// null gives error
shortcut=w=> w!==null?w.match(/[^aeiou]/ig).join(""):'';
   
//null is still giving error
shortcut=w=>(w ?? '').match(/[^aeiou]/ig).join('');

//ok thisone worked becaue 
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }