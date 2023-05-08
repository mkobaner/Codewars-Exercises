/* Twice as old https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

let twiceAsOld=(d,s)=> 2*s>d?2*s-d:d-2*s;
//Math abs can be used as well

let twiceAsOld = (d, s) => Math.abs(d - 2 * s);