const fndAge = [12,13,14,15];
const cousinAge = [15,16,17,19];
const broAge = [20,21,22,23,24];
// const allAges = fndAge.concat(cousinAge).concat([23]);
const allAges2 = [...fndAge,...cousinAge,...broAge];
console.log(allAges2);