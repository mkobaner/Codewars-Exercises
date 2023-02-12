//Create an a class and extend it - Can be anything you would like it to be! 
//well it will be conan and he is a barbarian but lets say he is a warrior

class Char{
    constructor(name,str,agi,con){
        this.name=name;
        this.str=str;
        this.agi=agi;
        this.con=con;

    }
    describe(){
        console.log(` ${this.name} has ${this.agi}, agi ${this.str} strengtg and ${this.con} `)
    }

    attack(){
       console.log(`${this.name} attacks`)
    }
}

class Warrior extends Char{
    constructor(name, str, agi, con, weaponMastery, shieldMastery){
        super(name,str,agi,con)
        this.weaponMastery=weaponMastery
        this.shieldMastery=shieldMastery
    }
        attack(){
            super.attack();
            console.log(`deals damage with strength of ${this.str} and weaponmastery of ${this.weaponMastery}`)
        }
    }


class Archer extends Char{
    constructor(name, str, agi, con, range, arrows){
        super(name,str,agi,con)
        this.range=range
        this.arrows=arrows
    }
        attack(){
            super.attack();
            console.log(`deals up to the range of ${this.range} and has  ${this.arrows} arrows left`)
        }
    }



let Konan = new Warrior('Konan',17,15,16,22,45)
let Mahmut = new Warrior('Mahmut',22,22,16,22,85)
let Fatma = new Archer('Fatma',16,30,14,14,50)

let group =[Konan,Mahmut,Fatma]
for (member of group){
    member.attack();
}

