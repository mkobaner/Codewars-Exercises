/*Remove the time https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e 

Task Description
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2"./
*/

shortenToDate=longDate=>{
    let timeGroup = longDate.split(' ');
    let thirdelement = '';
  for (let i = 0; i < timeGroup[2].length-1; i++) {
    thirdelement += timeGroup[2][i];
  }
  return `${timeGroup[0]} ${timeGroup[1]} ${thirdelement}`;

}

shortenToDate("Friday May 2, 9am");

// well given the context this is a simpler solution.

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}