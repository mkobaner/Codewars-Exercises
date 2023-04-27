/* Removing Elements https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
ake an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

let removeEveryOther = arr=>{
     arr.map((cur, index) => index!==0&&index%2!==0?  arr.splice(index,1):'');
    return arr;
    };

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);