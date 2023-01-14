// THE SUM OF RANGE SOLUTİON https://eloquentjavascript.net/04_data.html

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range (start,end){
    let myArray=[]
    for (i=start;i<=end;i++){
        myArray.push(i);
    }
    return myArray;
}

console.log(range(1,10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function range2 (start,end){
    let total=0
    for (i=start;i<=end;i++){
        total=total+i;
    }
    return total;
}

console.log(range2(1,10));

//need to read question better!!!
// function range3 (start,end,change=1){
//     let total=0;
    
//     for (i=start; i<=end; i=i+change){
//         total=total+i;
//         console.log(total);
//     }
//     return total;
// }

// console.log(range3(5,2,-1));

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].


function range4 (start,end,change){
    if(change>=0) {
        alert('positive')
    let myArray=[]
    for (i=start;i<=end;i=i+change){
        myArray.push(i);
    }
    return myArray;
} else if(change<0){
        let myArray=[]
        for (i=start;i>=end;i=i+change){
            myArray.push(i);
        }
        return myArray;

}

}

console.log(range4(20,0,-2));