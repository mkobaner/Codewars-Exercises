/*converter https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata: 11 26 70 64 59 416 397 15 77

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres */

converter=n=> (n/4.54).toFixed(2);


