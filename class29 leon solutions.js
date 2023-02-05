// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 


let b= 16-5
let c=7-1
let w=7-1
let total=b+c+w

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahToCel(fah){
    return ((fah - 32) * 5 / 9);
    
}

function charmanderFights(myFah){
    if (fahToCel(myFah)>0){
        alert('Charmander can fight')
    } else{alert('Charmander is cold')}
}

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
numofPokemon=prompt('number of pokemons please');

for(x=1; x<=numofPokemon; x++) {
    console.log('Pikachu I choose you')
}

//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function revOrder (arr){
    return arr.reverse();
}
console.log(revOrder([1,2,3,4]));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function a2Biggerthanb3 (a,b){
    let aTotal=0;
    a.forEach(element => {
        aTotal =aTotal+ element*element;
    });
    let bTotal=0;
    b.forEach(element =>{
        bTotal=bTotal+element*element*element;
    })
    return aTotal>bTotal;
}
a2Biggerthanb3([1,2,3],[1,2]);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


function retMultiple (arr){
    let newArray=[];
    for(x=0; x<arr.length;x++){
        if (arr[x]%x===0){
            newArray.push(arr[x])
        }
    }
    return newArray;
}


console.log(retMultiple([1,2,3,4,5,6,7,8]));


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumAll (arr){
    let total=0;
    for(x=0; x<arr.length;x++){
       total=total+ Number(arr[x])
    }
    return total;
}
console.log(sumAll(['2',3,4,5,'11']));