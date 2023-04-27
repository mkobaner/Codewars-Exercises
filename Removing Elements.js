/* Removing Elements https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
ake an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

let removeEveryOther = arr=>{
     arr.map((cur, index) =>{
        if (index!==0&&index%2===0)  
        {arr.splice(index,1)};
     } );
    return arr;
    };

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// doesnt work as expected  this returns 1,2,4,5,7,8,10 ??? instead of 1,3,5,7,9

//using for now,  map always behaves unnaturally ...

let removeEveryOther = arr => {
    for (let i = 1; i < arr.length; i=i+2) {
        arr.splice(i,1);
        console.log(i);
    }
    return arr;
  };

  //those wont work since arr length changes as it itarates its not maps fault.

  //i will start fromthe end of array and go to 0 than return array

  let removeEveryOther = arr => {
    for (let i = arr.length; i >0; i=i-2) {
        
        i%2==0? arr.splice(i-1,1):arr.splice(i,1)
        console.log(i);
    }
    return arr;
  };

//pretty proud since i did it without filter

  removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]);

  // here is the filtered solution

  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }