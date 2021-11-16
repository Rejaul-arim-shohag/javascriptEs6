class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Barishal polytechnic institute"
    }
}
const student1 = new Student(2, "Rejaul");
const student2 = new Student(4, "Babul");
console.log(student1.name, student2.school);

// const obj={name:"mahabub", id:3};
// console.log(obj)