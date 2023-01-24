/* Trimming a string https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"*/


// ok this problem's question is wrong, andi tried to understand what it asks from the failed tests from question, but either i failed to understand the failed tests or the code i wrote is not working as intended anyhow need to work on apis but beforei go i checked solutions here are my favourite ones. 

function trim(str, size) {
    const dots = "...";

    let finalString = str;

    if(str.length > size && size > 3) {
        finalString = str.substring(0, size-3) + dots;
    } else {
        finalString = str.substring(0, size) + dots;
    }

    if(str.length <= 3) {
        finalString = str.substring(0, size) + dots;
    }

    if(str.length <= size) {
        finalString = str;
    }

    return finalString;
}

// substring is the perfect tool for this challange


// function trim(str, size) {
//     let strArray=str.split('');
//     // console.log(strArray);
//     if(strArray.length<=size){
//         return str;
//     } 
//     else if (str.length<=3){
//         return str.charAt()+'...';
//     } 
//     else if (strArray.length>size){
//         let myStr=[];
//         for(n=-3; n<size-3; n++){
//             myStr=myStr+strArray[n+3];
//             // console.log(myStr);
//         }

//         return myStr+'...'
//     }
// }

// trim('asdf',2);
