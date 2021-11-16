const karim = {name: 'rejaul karim', father:'Mahabub alam', friends:["ma", "baba", "bon"]};
// const karimFather = karim.father;
// console.log(karimFather)
const {name} = karim;

const rejaul = ["student", 21, "Barishal"];
const [profession, age, district] = rejaul;
// console.log(profession)

const friends = ["Manna", "sakib", "Amir", "sharukh", "tiger", "atif", "salman"];
const [first, second, ...remaining] = friends;
// console.log(remaining[3]);

const nestedObject = {
    name:"Mohammad Rejaul karim",
    fatherName: "Mahabub Alam",
     address:{
         country: "Bangladesh",
         district: "Barishal",
         study:{
            diploma: "Barishal Polytechnic institute",
            ssc: "south goal vaour islamia dhakil madrash"
         }
     }
};

const {diploma} = nestedObject.address.study;
console.log(diploma)
