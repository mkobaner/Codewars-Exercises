/* Difference of Volumes of Cuboids https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code. */

findDifference=(a,b)=>a[0]*a[1]*a[2]>b[0]*b[1]*b[2]?a[0]*a[1]*a[2]-b[0]*b[1]*b[2]:b[0]*b[1]*b[2]-a[0]*a[1]*a[2]

// or Math abs ifu know the basics u dont needs abs tough its just handy ...

findDifference=(a,b)=> Math.abs(b[0]*b[1]*b[2]-a[0]*a[1]*a[2])

// and than there is this one diffucult to read tough i stillget confused with reduce so not a bad example 

function volume(c) {
    return c.reduce((x, y) => x * y);
  }
  
  function find_difference(a, b) {
    return Math.abs(volume(a) - volume(b));
  }

