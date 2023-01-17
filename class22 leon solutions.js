//class 22 solutions with my intake https://www.youtube.com/watch?v=LTda62-jyoM

// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console


let a=' Salgam ';
console.log(a.trim());
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let b=['peas', 'beans','banana']

console.log(b.find(e=> e==='apple'))

//leon's sol

let str="Bob duck apple dog"
//console.log(str.search('apple'))

//my interpretation
if(str.search('apple')<0){
    console.log('No Apples here')
} else {console.log(`Your apple is at ${str.search('apple')}`)}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function roPaSc (){
    if(Math.floor(Math.random() * 10)<3){
        return 'rock';
    } else if (Math.floor(Math.random() * 10)<6){
        return 'paper'
    } else {return 'scissors'}
    
}

// console.log(roPaSc());

//leon's solution was slightly different but same logic so no need to rerun 

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

// function whoWins(c){
//     c=c.toUpperCase();
//     let result =Math.floor(Math.random() * 10)
//     if(Math.floor(result)<3&& c==='PAPER'){
//         console.log('Paper Vs Rock you win');
//     } else if (result<6&& c==='SCISSORS'){
//         console.log('Scissors Vs Paper you win');
//     } else if (result<10&& c==='ROCK'){
//         console.log('Rock vs Scissors you win');
//     } else { console.log('you Lost')}
// }

// whoWins('scissors');

//Leon's solution was fundamentally different and but lacks the detail of my solution. Also he didnt use uppercase which can create bugs. Come to think of it i didnt code tie on my solution.
//added the details of winning or losing to his solution :) now this beats my original code 

//
function checkWin(playerChoice){
    let botChoice=roPaSc();
    if (playerChoice===botChoice){
        console.log('thats a tie reroll')
        checkWin(playerChoice);
    }else if (playerChoice==='rock'&&botChoice==='scissors'||playerChoice==='paper'&&botChoice==='rock'||playerChoice==='scissors'&&botChoice==='paper'){
        console.log(`You win Computer picked ${botChoice} and you picked ${playerChoice} Gj mate`);
    } else if (playerChoice==='paper'&&botChoice==='scissors'||playerChoice==='scissors'&&botChoice==='rock'||playerChoice==='rock'&&botChoice==='paper'){
        console.log(`You lost Computer picked ${botChoice} and you picked ${playerChoice} All your base belongs to us`);
    } 

}

// checkWin('rock');




//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


// function toNum(numTimes,rps){
// for(i=0;i<=numTimes;i++){
//     checkWin(rps);
// }
// }

//leon's solution an interesting way of coding he passes an array to decide how many times the code will run , on the other hand i pick one answer as rps and than run it numTimes

function playGameXTimes(arr){
    arr.forEach(choice => checkWin(choice))
}

playGameXTimes(['rock','paper','paper','scissors','scissors'])
