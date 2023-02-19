/*ASCII Total You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291*/

function uniTotal (abc) {
    let total=0;
    for (x=0; x<abc.length; x++){
        total=total+ abc.charCodeAt(x);
    }
    return total;
    }

    uniTotal('roark');

// tried to solve it with a one liner as well just had too many errors
    const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
