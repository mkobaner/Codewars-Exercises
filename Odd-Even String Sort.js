/*Odd-Even String Sort https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript 
 Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces */

sortMyString=s=>{
    return s.split('').reduce((acc,curr,i) =>{
        i%2===0? acc[0] +=curr:acc[1] +=curr;
        return acc;
    },['', '']).join(' ');
}

sortMyString('Mahmut Kobaner');

// allright looks like if i used filter with index like this 
// 
sortMyString=s=>{
    let even='';
    let odd='';
    even=s.split('').filter((n,i) => i%2==0).join('').toString();
    odd=s.split('').filter((n,i) => i%2!==0).join('').toString();
    return `${even} ${odd}`
}
sortMyString('Mahmut Kobaner');