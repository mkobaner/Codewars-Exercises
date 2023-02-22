/*Be Concise IV - Index of an element in an array Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.*/

function find(a, e) {
    let n=a.indexOf(e) 
    return (n>=0 ? n: 'Not found')
}


const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x
// those are gems include with itinery that rocks!!
let find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";