/*Especially Joyful Numbers https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.*/

//this is my solution :)

function numberJoy(n) {
    //get digits
   digits = (''+n).split('');

   let total = 0;
   //get total value of digits
   digits.forEach(element => {
    total=total+parseInt(element);
    // console.log(total);
   });
   //check if harshad is true 
   let harshadTrue= false;
    if(n%total===0){
        harshadTrue=true;
    }

    // console.log(harshadTrue);
    //get reverse of total
    strTotal=total.toString();
    let reverseTotal=strTotal.split('').reverse().join('');
    // reverseTotal=reverseTotal.parseInt();
    // console.log(total*reverseTotal);
    // console.log(n);
    if(total*reverseTotal===n&&harshadTrue===true){
        return true;
    } else {return false};
}

numberJoy(1729);


