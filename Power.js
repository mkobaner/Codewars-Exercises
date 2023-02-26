/*Power https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).*/
function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
 }

 const numberToPower=(n,p) => Math.pow(n,p);

//this solution is cool but doesnt accept ** or Math.pow so lets go old school


  const numberToPower=(n,p) => {
    let result=1;
    for (i=0; i<p;i++){
        result=result*n
    }
    return result;
  }