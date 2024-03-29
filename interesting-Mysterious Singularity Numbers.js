/*Mysterious Singularity Numbers  https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d/train/javascript
This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

Example
Let's take the number 5 as an example:

1 - doesn't divide integer by 2, 3, and 5
2 - divides integer by 2
3 - divides integer by 3
4 - divides integer by 2
5 - divides integer by 5
Answer: 1

because only one number doesn't divide integer by any of 2, 3, 5

Note
Again, try to think of a formula that will shorten your solution and help you pass big tests.

Good luck :)

If you want to solve our problems, they are here: From Singularity Hub Community

 */

realNumbers=n=>{
    let count=0
    for(x=1;x<=n;x++){
        !(x%2==0||x%5==0||x%3==0)?count++:''
    }
    return count
}
//works but inefficient

realNumbers=n=>{
    mF=d=>Math.floor(n/d);
    return n-mF(2)-mF(3)-mF(5)+mF(6)+mF(10)+mF(15)-mF(30)
}
// works efficiently i subtract  divisble by 2,3,5 and than add 10 15 30 since those are substracvted twice and than remove 30 since this also added twice by 15 and 10 

// ~~ this is Math.floor :9 how cool is that :) 
function realNumbers(n) {
    return n - ~~(n/2) - ~~(n/3) - ~~(n/5) + ~~(n/6) + ~~(n/10) + ~~(n/15) - ~~(n/30);
  }
