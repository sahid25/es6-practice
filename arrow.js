const oldFun = function myFunction(num){
    return num + 24;
}
const result1 = oldFun(4);
// console.log(result1);
const newOneTry = num => num + 4;
const result2 = newOneTry(4);
// console.log(result2);

const newSecound = ()=> 3;
const result3 = newSecound() + 3;
// console.log(result3);

const newThird = (x,y) => {
    const a = x * y;
    const b = x + y;
    const c = a + b;
    return c;
}

const result4 = newThird(20,30);
console.log(result4);