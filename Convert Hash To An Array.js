/* Convert Hash To An Array https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!*/

function convertHashToArray(hash){
   

   let sorted =[];
   for (_key in hash) {
      // console.log(_key);
      // console.log(hash[_key]);
      sorted.push([_key, hash[_key]]);
      
   }
   
   return sorted.sort();

  }

  console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))