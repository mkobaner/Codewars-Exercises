/*Return to Sanity This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}*/


// return creates an early return at the end of line interesting question tough
function mystery() {
  let results = {sanity: 'Hello'};
  return results;
}