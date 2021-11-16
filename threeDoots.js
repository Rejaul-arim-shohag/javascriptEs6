const array1 = [1, 5, 7, 8, 8];
const array2 = [9, 10, 11, 12, 13];
const array3 = [14, 15, 16, 17, 18]
// const arrayConcat = array1.concat(array2, array3, [19, 20]);
// console.log(arrayConcat);
const arrayConstSpread = [...array1, ...array2, ...array3];
// console.log(arrayConstSpread);

const sum = (x, y, z)=>{
    return x + y + z;
};
const numbers = [4, 6, 9];
// console.log(sum(...numbers));

const first= ["karim", "shohag", "mahabub"];
const second = "jesmin";
const arrayConcat3 = [...first, second];
// console.log(arrayConcat3);

const business = 890;
const ukil = 870;
const minster = 980;
const allNum = [467, 898, 9000, 574, 76]
const maximum = Math.max(...allNum);
console.log(maximum);

