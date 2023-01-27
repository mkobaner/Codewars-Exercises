/* Snail crawls up https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript
The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

Your function takes three arguments:

The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)
Calculate number of day when the snail will reach the top of the column.*/

function snail(column, day, night) {
    
    return (Math.ceil((column-day)/(day-night)))+1 ;
    // need to find out the days before reaching top cause that day snail wont be slipping say 25 5 3 snail wont come top in 13 days, instead in first 10 days it will reach 20 and than on 11'th day it will reach 25 and wont be slipping thats why there is(column-day)/(day-night) instead of column/(day-night).
    


  }