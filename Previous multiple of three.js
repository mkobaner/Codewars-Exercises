/* Previous multiple of three  https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9*/


// const prevMultOfThree = n => {
//     if ( n%3===0){ return n} 
//     else if  (n>=1) {
//       for (x=0; x<n.length-1; x++)
//       console.log(`${n} n budur`)
//       n=String(n)
//       {
//         if (Number(n.slice(0,-x))%3===0){
          
//           console.log(`${Number(n.slice(0,-x))} 24 ran`);
//           return n.slice(0,-x);
//         }
//       }
//     }
//   }

//   prevMultOfThree(365);

//Great Solutions

const prevMultOfThree = n => {
  if (n === 0) return null;
  if (n%3 === 0) return n;
  return prevMultOfThree(+n.toString().slice(0, -1))
}

const prevMultOfThree2 = n => {
  while(n % 3 != 0) {
    n = Math.floor(n/10);
    if (n < 1) return null;
  }
  return n;
}



