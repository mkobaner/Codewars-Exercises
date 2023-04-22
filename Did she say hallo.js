/*Did she say hallo? You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests*/

validateHello=g=>{
    switch(g.toLowerCase()) {
        case 'hello':
        case 'ciao':
        case 'salut':
        case 'hallo':
        case 'hola':
        case 'ahoj':
        case 'czesc':
          return true;
        default:
          return false;
      }
}


// tests wants to check for strings that contains the keywords

validateHello=g=>{
const greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
return greetings.includes(g.toLowerCase());
}

//this didnt work either

function validateHello(input) {
    const regex = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i;
    return regex.test(input);
  }

  //works but lets do it without regex

  

