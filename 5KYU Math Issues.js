/* Math Issues https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor() */

Math.round = function(number) {
    return (number%1)>=0.5?number+(1-number%1):number-(number%1); // TODO: fix this
  };
  
  Math.ceil = function(number) {
    return number==0?+0:number%1==0?number:number+(1-number%1) ; // TODO: fix this
  };
  
  Math.floor = function(number) {
    return number==0?0:number-(number%1); // TODO: fix this
  };


  // parseint  can be used as well

  Math.round = function(n)
{ return parseInt(n+0.5); };

Math.ceil = function(n)
{ return n==parseInt(n) ? this.round(n) : parseInt(n)+1; };

Math.floor = function(n)
{ return parseInt(n); };

// >> << shift right shift left very interesting solution
Math.round = (n) => n + 0.5 >> 0;
Math.ceil = (n) => Number.isInteger(n) ? n : n + 1 << 0;
Math.floor = (n) => n >> 0;