/*Emotional Sort ( ︶︿︶) Emotional Sort ( ︶︿︶)
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid
Enjoy! (づ｡◕‿‿◕｡)づ */

function sortEmotions(arr, order){
    if(arr.length==0){
        return []
    } 
    let superHappyCount=0;
    let happyCount=0;
    let normalCount=0;
    let sadCount=0;
    let superSadCount=0;

    for (n=0;n<arr.length;n++){
        arr[n]==':D'? superHappyCount+=1 :
        arr[n]==':)'? happyCount+=1 :
        arr[n]==':|'? normalCount+=1 :
        arr[n]==':('? sadCount+=1 :
        superSadCount+=1
    }
      // console.log(superHappyCount,happyCount,normalCount,sadCount,superSadCount,order) 

    if (order==true) 
    {
    let result = [
        ...Array(superHappyCount).fill(':D').map(e => e + ','),
        ...Array(happyCount).fill(':)').map(e => e + ','),
        ...Array(normalCount).fill(':|').map(e => e + ','),
        ...Array(sadCount).fill(':(').map(e => e + ','),
        ...Array(superSadCount).fill('T_T').map(e => e + ',')
      ];
      return result.slice(0, -1); // Remove the trailing comma from the last emoticon
    }

 
    else {
    let result = [
        ...Array(superSadCount).fill('T_T').map(e => e + ','),
        ...Array(sadCount).fill(':(').map(e => e + ','),
        ...Array(normalCount).fill(':|').map(e => e + ','),
        ...Array(happyCount).fill(':)').map(e => e + ','),
        ...Array(superHappyCount).fill(':D').map(e => e + ',')
      ];
      return result.slice(0, -1); // Remove the trailing comma from the last emoticon
    }

  }
//  sortEmotions(([ ':D', 'T_T', ':D', ':(' ], false));