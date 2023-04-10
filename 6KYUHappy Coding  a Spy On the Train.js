/* Happy Coding : a Spy On the Train https://www.codewars.com/kata/599cf86d01a4108584000064/train/javascript 
ask
You are a spy. You lurk in the enemy's control zone. Your task is to get the length data of a railway, accurate to meters.

Although you have taken all kinds of technical measures, you still haven't finished your task.

Now, You can only use the last method: Take the train, record the sounds you hear, and then calculate the length of the railroad.

You will hear these voices:

1. "呜呜呜". This is the whistle of the train when it comes in or out of the station.

That is, When you hear the sound for the first time, the train leaves the
station and goes into high speed; When you hear the sound for the second
time, The train pulled into the station and goes into low speed. and so on.

2. "哐当". This is the sound of the train hitting the railroad track.

That is, Every time you hear it, the train advances 20 meters(high speed) 
or 10 meters(low speed).

3. Any other sound. These are all noise, please ignore them ;-)
Examples
For sounds="呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
The output should be 150. 

For sounds="呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"
The output should be 300. 

For sounds="呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"
The output should be 150.  */

lengthOfRailway =sounds=>{
    let meters=0;
    inStation=false;
    for( n=0; n<sounds.length ;n=n+1){
        `${sounds[n]+sounds[n+1]+sounds[n+2]}`=='呜呜呜'?inStation=!inStation:`${sounds[n]+sounds[n+1]}`=='哐当'&&inStation==true?meters+=20:`${sounds[n]+sounds[n+1]}`=='哐当'&&inStation==false?meters+=10:meters+=0
    }
    return meters;
}

