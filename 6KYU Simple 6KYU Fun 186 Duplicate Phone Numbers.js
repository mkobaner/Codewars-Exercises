/*Simple Fun #186: Duplicate Phone Numbers https://www.codewars.com/kata/58bf67eb68d8469e3c000041/train/javascript 
Task
Businesses like to have memorable telephone numbers. One way to make a telephone number memorable is to have it spell a memorable word or phrase.

For example, you can call the University of Waterloo by dialing the memorable TUT-GLOP. Sometimes only part of the number is used to spell a word. When you get back to your hotel tonight you can order a pizza from Gino's by dialing 310-GINO.

The standard form of a telephone number is seven decimal digits with a hyphen between the third and fourth digits (e.g. 888-1200). The keypad of a phone supplies the mapping of letters to numbers, as follows:

A, B, and C map to 2
D, E, and F map to 3
G, H, and I map to 4
J, K, and L map to 5
M, N, and O map to 6
P, R, and S map to 7
T, U, and V map to 8
W, X, and Y map to 9
letters can be uppercase or lowercase
There is no mapping for Q(q) or Z(z). Hyphens are not dialed, and can be added and removed as necessary. The standard form of TUT-GLOP is 888-4567, the standard form of 310-GINO is 310-4466, and the standard form of 3-10-10-10 is 310-1010.

Two telephone numbers are equivalent if they have the same standard form. (They dial the same number.)

Given a list phoneNumbers, your task is to find the duplicate telephone number in the list. Return an array like this:

["310-1010:2","487-3279:4","888-4567:3"]

The form of each element is standard form + : + numbers of duplicate

Input/Output
[input] string array phoneNumbers
The list of the telephone numbers. Each telephone number consists of a string composed of decimal digits, letters (excluding Q and Z) and hyphens. Exactly seven of the characters in the string will be digits or letters.

[output] a string array
The duplicate telephone number list. Arrange the output string by telephone number in ascending lexicographical order. If there are no duplicates in the input return [].

#Example
For phoneNumbers =

[
"7399425",
"SEXY-GAL",
"Sexy-GAL",
"sexy-gal",
"SEXY-425",
"S-E-X-Y-G-A-L"
]
The output should be:

["739-9425:6"]*/

function findDuplicatePhoneNumbers(phoneNumbers) {
  const keypadMapping = {
    'A': 2, 'B': 2, 'C': 2,
    'D': 3, 'E': 3, 'F': 3,
    'G': 4, 'H': 4, 'I': 4,
    'J': 5, 'K': 5, 'L': 5,
    'M': 6, 'N': 6, 'O': 6,
    'P': 7, 'R': 7, 'S': 7,
    'T': 8, 'U': 8, 'V': 8,
    'W': 9, 'X': 9, 'Y': 9,
  };
  
  const standardPhoneNumbers = phoneNumbers.map(phoneNumber => {
    let standardPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
      const char = phoneNumber.charAt(i);
      if (/\d/.test(char)) {
        standardPhoneNumber += char;
      } else if (/[A-Za-z]/.test(char)) {
        standardPhoneNumber += keypadMapping[char.toUpperCase()];
      }
    }
    return standardPhoneNumber.substring(0, 3) + '-' + standardPhoneNumber.substring(3);
  });
  
  const countTable = {};
  standardPhoneNumbers.forEach(phoneNumber => {
    countTable[phoneNumber] = (countTable[phoneNumber] || 0) + 1;
  });
  
  const duplicatePhoneNumbers = [];
  Object.keys(countTable).forEach(phoneNumber => {
    if (countTable[phoneNumber] > 1) {
      duplicatePhoneNumbers.push(phoneNumber + ':' + countTable[phoneNumber]);
    }
  });

  
