//Leon class 21 exercises https://www.youtube.com/watch?v=75TQEQ6wxAE&t=2s

//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows=['Breaking Bad','House','Dexter'];
for (i=0;i<tvShows.length; i++){
    console.log(tvShows[i]);
}

//leons sol
tvShows.forEach(i=>console.log(i));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers =[1,2,3,4,5,6,7,8,9,12,54,23,32];
let evenNumbers=[];
for (i=0;i<numbers.length;i++){
    if(numbers[i]%2===1){
        evenNumbers.push(numbers[i]);

    }
}

console.log(evenNumbers);

//leons sol
let numbers =[1,2,3,4,5,6,7,8,9,12,54,23,32];

let onlyEvens = arr=>arr.filter(n=>n%2===0)

console.log(onlyEvens(numbers))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

// function totSecs(arr){
//     let highN=0;
//     let high1N=0;
//     let lowN=0;
//     let low1N=0;
    
//     for (i=0; i<arr.length;i++){
//         if (highN<arr[i]){
//             high1N=highN;
//             highN=arr[i];}
//             // console.log(arr[i]);
//             // console.log(highN);
//             // console.log(high1N);
//             // console.log(arr.length);
    
//         if (lowN>arr[i]){
//            lowN=low1N;
//             lowN=arr[i];
//         } 
        
//     }
//     console.log(high1N);
//     console.log(low1N);
//     }
    
// totSecs([1,2,3,4,5,6,7,8,9,12,54,23,32]);
//failed...

//leons sol

function totSecs(arr){
    let sorted = arr.sort((a,b)=>a-b)
    alert(sorted[1]+arr[sorted.length-2])
}
totSecs([1,2,3,4,5,6,7,8,9,12,54,23,32]);


// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let a='NEW YEAR'
console.log(a);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let b='monday';
alert(b.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function min5(arr){
    return alert(100-(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]))
}

min5([3,23,43,1,3]);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function findLoHı(a,b,c){
    if (a>b&&a>c){
        console.log(a +'is highest')
    }
    if (b>a&&b>c){
        console.log(b +'is highest')
    }
    if (c>a&&c>b){
        console.log(c +' is highest')
    }
    if (a<b&&a<c){
        console.log(a +' is lowest')
    }
    if (b<a&&b<c){
        console.log(b +'is highest')
    }
    if (c<b&&c<b){
        console.log(c +'is highest')
    }
}

findLoHı(1,2,3);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headTail(){
    if ((Math.floor(Math.random()*10)>5)){
        return 'heads';
    } else {return 'tails'}
}

headTail();


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function numTo(x){
    for (n=0; n<=x; n++ ){
        console.log(headTail())
    }
 
}

numTo(15);





