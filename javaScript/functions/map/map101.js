// Creates a new array with the results of calling a 
// callback on every element in the array

const fullNames = [
    {first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}
];


// const firstNames = fullNames.map(function(fullName) {
//     return console.log(fullName.first)
// })

// with arrow function

const firstNames = fullNames.map((fullName) => {
    return console.log(fullName.first)
})