/*/*Sum without highest and lowest number

um all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/


function sumArray(array) {

// in the 19th line if you write array.length before undefined and than test it you get an error it took me sometime to understand it but now i got it and i am happy :)
if(array===null||array===[]||array===undefined||array.length===1){
    return 0;
}
array=array.sort((a,b) => a-b);
let total=0;
for (let index = 1; index < array.length-1; index++){
    total=total+array[index];
   
}
return total;
}
