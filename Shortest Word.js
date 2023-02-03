/*Shortest Word  https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/


function findShort(s){

s=s.split(' ');
// console.log(s);
let low=s[0].length;
s.forEach(element => {
    if(low>element.length)
    {
        low=element.length;
        // console.log(low);
    }}
    )
return low;
}

// findShort('Mahmut bir kraldir Tamam mi adamim')


/* this one looks much nicer :)

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

*/