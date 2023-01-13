function reverseWords (arr){
    myArray=arr.split(' ');
    // console.log(myArray);
    for (i=0; i< Math.floor(myArray.length/2); i++) {
        // [console.log(i)]
        [myArray[i],myArray[myArray.length-1-i]]=[myArray[myArray.length-1-i],myArray[i]];
        
    }
    // console.log(arr);
    arr=myArray.join(' ')
    return arr;
  }


//   reverseWords('merhaba mahmut');

 //works on console 

//looks like you have to use reverseWords as function name in order to be able to submit test also test syntax required some imitation ;)
const { assert } = require('chai');

describe("reverseWords",function(){
  it("should work for some examples", function(){
    assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
    assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
    assert.strictEqual(reverseWords(""                             ),  "")
  });
});
