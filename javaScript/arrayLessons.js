
const names = ["John", "Jane"];

const lastNames = ["Sousa", "Fonseca"];


const allNames = names.concat(lastNames);
// console.log(allNames)
// console.log(allNames.includes("Sousas")) // return false
// console.log(allNames.includes("Sousa")) // return true
// console.log(allNames.indexOf("JaMM")) // return -1

// const reversing = allNames.reverse();
// console.log(reversing, names, lastNames);

// SLICE
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const choosenOnes = colors.slice(3, 6)
// console.log(choosenOnes);

// SPLICE
const colors2 = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const slipced = colors2.splice(1, 1);
// colors2.splice(2, 0, 'newColor')
// console.log(slipced, colors2);

// SORT