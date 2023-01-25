//Example fetch using pokemonapi.co
document.querySelector('#button1').addEventListener('click', getFetch)



function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://aztro.sameerkumar.website?sign=leo&day=01.01.2023`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerHTML= data.name;
        document.querySelector('h3').innerHTML=` `
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

let today = new Date();
curMonth=(1+today.getMonth());
console.log(curMonth);
curDate=today.getDate();
console.log(curDate);


const url2 = `http://history.muffinlabs.com/date/${curMonth}/${curDate}?json`;



  fetch(url2)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        let total=0;
        let histEvents=[];
        data.data.Events.forEach(element => {
          histEvents[total]=element.text;
          total=total+1;
          
        });
        // console.log(histEvents);
        total=Math.floor(total*Math.random())
        // console.log(total);
        document.querySelector('#h31').innerHTML= `Historical event of today : ${histEvents[total]} `;

        

      })
      .catch(err => {
          console.log(`error ${err}`);
      });

     
      
        
      



