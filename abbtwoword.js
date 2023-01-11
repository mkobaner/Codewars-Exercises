// function abbrevName(name){
// let arrayedStr1=Array.from(name);
//   console.log(arrayedStr1[0]);
// let secondName=name.split(' ');
//   console.log(secondName);
// let arrayedStr2=Array.from(secondName[1]);
// console.log(arrayedStr2);
//   return(`${arrayedStr1[0].toUpperCase()}.${arrayedStr2[0].toUpperCase()}.`)
//     // code away

// }

// abbrevName('Ali Baba');

// function abbrevName(name){
//     let arrayedStr1=Array.from(name);
//       console.log(arrayedStr1[0]);
//     let secondName=name.split(' ');
//       console.log(secondName);
//     let arrayedStr2=Array.from(secondName[1]);
//     console.log(arrayedStr2);
//       return(arrayedStr1[0].toUpperCase()+'.'+arrayedStr2[0].toUpperCase()+)
//         // code away
    
//     }

// function abbrevName(name){
//     let arrayedStr1=Array.from(name);
      
//     let secondName=name.split(' ');
     
//     let arrayedStr2=Array.from(secondName[1]);
    
//       return(arrayedStr1[0].toUpperCase()+'.'+arrayedStr2[0].toUpperCase()+'.')
//         // code away
    
//     }

//     abbrevName('Ali Baba');

// function abbrevName(name){
    
//     return(name[0].to+'.'+name[name.indexOf(' ')+1])
//      // code away

// }


// function abbrevName(name){
    
//     return((name[0].toUpperCase())+'.'+(name[(name.indexOf(' ')+1)].toUpperCase()))
//      // code away

// }

// abbrevName('asnasdf fdfaef');

function abbrevName(name){
    //taking the first letter in name and than ill get index number of space add 1
    //to it and  take it than i convert both letters to upper case and add a . to
    //middle of them
    
      return((name[0].toUpperCase())+'.'+(name[(name.indexOf(' ')+1)].toUpperCase()))
       // code away
  
  }
  