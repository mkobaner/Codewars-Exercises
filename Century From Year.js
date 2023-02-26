/* Century From Year https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20*/


// pretty proud of this answer 

  let century=year=> year<101?1:(((year-1)/100)|0)+1;


// ireally liked the use of ceil here  tough
function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }

//those are some eary tries  
//   function century(year) {
//     year<101?1:
//     year=year-1
//     console.log(year)
//     return (Number(String(year).substring(0,2))+1)
//   }

//   let century=year=> year<101?1:
//   year>100&&year<1001?(Number(String(year).substring(0,1))+1):
//   (Number(String(year-1).substring(0,(year/100)|0 ))+1);

//   century(1234567);
