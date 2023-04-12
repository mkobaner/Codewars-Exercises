/*If you can't sleep, just count sheep!! https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
countSheep=n=> Array.from({ length: n }, (_, i) => `${i + 1} sheep...`).join("");