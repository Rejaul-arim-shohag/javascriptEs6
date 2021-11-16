
class Parent{
    constructor(){
        this.fatherName = "Mahabub Alom"
    }
}
class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }
    getFatherChild(){
        return this.fatherName+" "+this.name;
    }
};

const child = new Child("Mohammad Rejaul karim");
const child2 = new Child("Tanzila");
console.log(child.getFatherChild(), child2.getFatherChild());