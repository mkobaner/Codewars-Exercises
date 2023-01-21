// Solved now :)

/*Count of positives / sum of negatives  https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/




 
// well yesterday i figured i need to check if array is null or not before other conditions today i applied it to this question and was able to solve it , a happy panda here :)

  function countPositivesSumNegatives(input){
    let total=[0,0];
    let count=0;
    if (input===null||input.length===0){
        return [];
    } 

    input.forEach(element => {
        if (element>0){
            count++;
            total[0]=count;
        } else if (element<0){
            total[1]=total[1]+element;
        }
        


    });
    return total;

  }

 // first tries
// function countPositivesSumNegatives(input) {
//     let result=[0,0];
//     let count=0;
//     input.forEach(element => {
//         if(element>0){
//             count++;
//             result[0]=count;
//         } else if (element<0){
//             result[1]=result[1]+element;
//         } else if(input.length===0||element===null)
//         {result.length=0};
        
//     });
//     return result;
//   }

// function countPositivesSumNegatives(input) {
//     let result=[0,0];
//     let count=0;
//     input.forEach(element => {
//         if(input.length===0||input===null)
//         {return []} 
    
//          else if (element<0){
//             result[0]=result[0]+element;
//         } else if(element>0){
//             count++;
//             result[0]=count;}
        
//     )};
//     return result;
//   }






  