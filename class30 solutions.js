//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
//forget machine make espresso :)
class Espresso{
    constructor(eSmell,eTaste,eMilk,eCream){
    this.smell=eSmell;
    this.taste=eTaste;
    this.milk=eMilk;
    this.cream=eCream;

    }
    boil() {
        console.log(this.smell)
    }
    addMilk(){
        this.milk=true;
    }
    addCream(){
        this.cream=true;
    }
}

let mocha = new Espresso('intense','milky',false,false);