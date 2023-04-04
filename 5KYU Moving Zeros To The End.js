/* Moving Zeros To The End https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

moveZeros=arr=>{
 let zeros=[];
 let nonZeros=[];

arr.forEach(ele => { ele===0?zeros.push(ele): nonZeros.push(ele)});

return nonZeros.concat(zeros);
}

// this one is much more concise but lets make it better

var  moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
  }

  // here is my version, when i check with first code i realize my first code is much more maintainable.

  moveZeros=arr=>{
    return[
        ...(arr.filter(n=n!==0)),
        ...(arr.filter(n=n==0))
    ]
  }