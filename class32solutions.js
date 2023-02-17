// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }
// }
// class Cat extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }









class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()   
}


class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}

class Full extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)

    }}

let Mahmut =new Full('Mahmut','Fullstack','MERN');



class Human{
    constructor (name,race){
        this._name=name;
        this._race=race;
    }
    get name(){
        return this._name
    }
    get race(){
        return this._race
    }
    sayHello(){
        console.log(`Hello This is ${this._name} and i am a ${this._race}`)
    }

}

class Man extends Human{
    constructor(name, race,sex){
        super(name,race)
        this._sex=sex
    }
    get sex(){
        return this._sex;
    }
    sayHello(){
        console.log(`Hello This is ${this._name} and i am a ${this._race} and a ${this._sex} ie`)
    }

}

class Woman extends Human{
    constructor(name,race,sex){
        super(name,race)
        this._sex=sex
    }
    get sex(){
        return this._sex;
    }
    sayHello(){
        console.log(`Hello This is ${this._name} and i am a ${this._race} and a ${this._sex} `)
    }
}


let Robert= new Man('Mahmut','Caucasion','Male');
let Lisa=new Woman('Lisa','Scandinavian','Woman');
let people=[Robert,Lisa];
for (one of people){
    one.sayHello()
}
