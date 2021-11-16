function add(num1, num2) {
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    num2 = num2 || 2
    const total = num1 + num2;
    return total
};
const myadd = add(45, 10);
console.log(myadd)