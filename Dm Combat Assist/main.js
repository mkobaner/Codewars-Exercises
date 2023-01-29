let totalplayer=0;
document.querySelector('.addPlayerButton').addEventListener('click', addPlayer);

function Char ( name,ac,hp,flanked ){
    this.name=name;
    this.ac=ac;
    this.hp=hp;
    this.flanked=flanked;
}

function Enemy ( name,att,damage, ){
    this.name=name;
    this.att=att;
    this.damage=damage;
    
}









function addPlayer(){

totalplayer++;

const charName=prompt('Enter Hero Name:')
const charAC=prompt('Enter Hero AC:')
const charHp=prompt('Enter Hero HP:')
const charFlanked=prompt('Flanked ? true or false ')
let hero= new Char(charName,charAC,charHp,charFlanked);
const playerDiv = document.createElement('div');

playerDiv.classList.add(`player${totalplayer}`);

document.querySelector('.playerArea').append(playerDiv);

let enemyButtonTag=`addEnemyButton${totalplayer}`;

const addEnemyButton= document.createElement('button')
addEnemyButton.innerHTML='Add Enemy';
addEnemyButton.classList.add(enemyButtonTag);

let divTag =`player${totalplayer}`;

document.querySelector(`.${divTag}`).append(addEnemyButton);


const textNode = document.createTextNode(`${charName} has ${charAC} AC, ${charHp} HP and flanked ${charFlanked}`)
document.querySelector(`.${divTag}`).append(textNode);
document.querySelector(`.${enemyButtonTag}`).addEventListener('click', addEnemy);

}



let totalEnemy=0;

function addEnemy(){ 
    totalEnemy++;
    let divTag=`enemy${totalEnemy}`;
    const addEnemyButton= document.createElement('button')
    addEnemyButton.innerHTML='Roll';
    addEnemyButton.classList.add(divTag);
    document.querySelector(`.player${totalplayer}`).append(addEnemyButton);


    const enemyName=prompt('Enter Enemy Name:');
    const enemyAtt=prompt('Enter Enemy Att:');
    const enemyDamage=prompt('Damage 4 for 1d4 or 8 for 1d8:');
    let enemy= new Enemy(enemyName,enemyAtt,enemyDamage);
    
    const dice=prompt('dice size enter 20 for default');

    const textNode = document.createTextNode(`${enemyName} has ${enemyAtt} bonus attack and  damage for ${enemyDamage} `)
    document.querySelector(`.player${totalplayer}`).append(textNode);


}





