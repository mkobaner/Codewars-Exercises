/*Simple Change Machine https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.*/

changeMe = m=>m=='£5'?'20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p':m=='£2'?'20p 20p 20p 20p 20p 20p 20p 20p 20p 20p':m=='£1'?'20p 20p 20p 20p 20p':m=='50p'?'20p 20p 10p':m=='20p'?'10p 10p':m;

console.log(changeMe('£5'))

//Changing hardcoded to logic for long 20p

changeMe = m=>m=='£5'?Array(25).fill('20p').join(' '):m=='£2'?Array(10).fill('20p').join(' '):m=='£1'?Array(5).fill('20p').join(' '):m=='50p'?'20p 20p 10p':m=='20p'?'10p 10p':m;