/* Square(n) Sum https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

function squareSum(numbers){
    let total=0;
numbers.forEach(element => {
    total=total+element**2
});
return total;
}

function squareSum2(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}


function mkx(numbers){
    return numbers.reduce(function(sum,n){
        return(n*n)+sum;
    })
}

function mkm(numbers){
    return numbers.reduce((sum,num)=> sum+(num*num),0)
}
//syntax of reduce needs some adjustment still!!!
function MahmutX(numbers){
    return numbers.reduce((sum,num)=> sum*sum-num +num+1)
}