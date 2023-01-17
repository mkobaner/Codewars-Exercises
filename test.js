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


