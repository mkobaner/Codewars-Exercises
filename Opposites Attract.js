/* Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

lovefunc=(a,b)=>(a%2==0&&b%2==1)||(b%2==0&&a%2==1);

//like the logic there

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//lets do it with =>
lovefunc=(a,b)=>a%2 !==b%2;
