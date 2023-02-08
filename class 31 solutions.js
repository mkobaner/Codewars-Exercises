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
}

class Warrior extends Char{
    constructor(name, str, agi, con, weaponMastery, shieldMastery){
        super(name,str,agi,con)
        this.weaponMastery=weaponMastery
        this.shieldMastery=shieldMastery
    }
}
let Konan = new Warrior('Konan',17,15,16,45,25)