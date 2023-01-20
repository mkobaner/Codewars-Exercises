// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let a ='Today is good ?';
if(a[a.length-1]==='?'){
    alert(a);
}

//leons sol

const str='is this the best day?'
alert(str.endsWith('?'));


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console


let b='Hey I am Robert and i am a jr. dev and weather is good';

b.replace('jr. dev', 'Software Engineer');
console.log(b.replace('jr. dev', 'Software Engineer'));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function oneIn3(){
let c=Math.random();
console.log(c);
if (c<0.33){
    return 'rock';
} else if (c<0.66){
    return 'paper';
}else if (c<0.99){
    return 'scissors';
}
}

// console.log(oneIn3());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function whoWins(choice){
    choice=choice.toLowerCase();
    botChoice=oneIn3();
    if (botChoice===choice) {
        console.log(`${choice} is chosen by both thats a tie reroll`);
        whoWins(choice);
    } else if ((botChoice==='rock'&&choice==='scissors')||(botChoice==='paper'&&choice==='rock')||(botChoice==='scissors'&&choice==='paper')){
        console.log(`Computer wins with ${botChoice} vs ${choice} All Your base Belongs to USSS` )
    } else {
        console.log(`Player wins with ${choice} vs ${botChoice} So long ai, ull be my servant`)
          }
}


whoWins('scissors');
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function mulGames(arr){
    arr.forEach(element => {
        whoWins(element);
    });
}

mulGames(['rock','rock','rock','paper','paper','paper','scissors','scissors','scissors'])


//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numbers = new Array();

numbers=[1,3,5,8,11,36];
let total=0;
numbers.forEach(element => {
    total=total+element;
});

alert(total);

console.log(squared(numbers))


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squared (arr){
const mapped=arr.map(element=> element*element);
return mapped;
}

console.log(squared(numbers))

//Create a function that takes string
//Print the reverse of that string to the console


function reverseIt(abc){
    console.log(abc.split('').reverse().join(''));
}

reverseIt('Torakkuzu');
//Create a function that takes in a string
//Alert if the string is a palindrome or not



function palindrome(bcd){
    if (bcd.split('').reverse().join('')===bcd){
        alert('Thats Palindrome')
    } else { alert ('not a palindrom')}
}

palindrome('anastas mum satsana');

