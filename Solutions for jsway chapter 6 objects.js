// This page has solutions for exercises at https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// first exercise with object
// const r = Number(prompt("Enter the circle radius:"));
// let mycirc=((2) * (Math. PI) * (r))
// let myArea=(Math.PI*r*r);
// const circle = {
//     circumference: mycirc,
//     area:myArea,
// }

// console.log(`Its circumference is ${circle.circumference}`);
// console.log(`Its area is ${circle.area}`);

// second exercise with function

const r = Number(prompt("Enter the circle radius:"));

console.log(r);
const circle = {
    circumference(){
      return   ((2) * (Math.PI)) * r
    },
    area(){
        return (Math.PI*r*r)
    },
}

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// const Aurora = {
//     health:150,
//     strength:25,
//     xp:0,

//     describe(){
//         return (`Aurora has ${Aurora.health} health, ${Aurora.strength} strength and ${Aurora.xp} experience`)
//     }
// }

//Third Exercise

// // Aurora is harmed by an arrow
// Aurora.health -= 20;

// // Aurora equips a strength necklace
// Aurora.strength += 10;

// // Aurora learn a new skill
// Aurora.xp += 15;

// console.log(Aurora.describe());

//Fourth Exercise

const dog= {
    name:'Bobi',
    species:'fino',
    size:20,
    bark(){
        return 'hav hav hav'
    },
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Fifth Exercise

const account={
    name:'Alex',
    balance:0,
    credit(action){
        account.balance=parseInt(account.balance)+action
    },
    describe(){
    return `Owner ${account.name}, balance ${account.balance}`
    }
}

console.log(account.describe());

// this solution works when it runs also adds and changes balance with credit() however time to time describe() returns variables as written instead of variable's data(value).
