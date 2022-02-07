console.log('this is something');

function add(num1 , num2 = 10 ){
    //  num2 = num2 || 20; // default value is 20 // trick 1

    // if (num2 === undefined) {
    //     num2 = 120; // default value is 120;  // trick 2
    // }
    return num1 + num2;
};
const total = add(22);
console.log(total);