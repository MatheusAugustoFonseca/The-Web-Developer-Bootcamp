// 1 Turn an array of numbers into a 
// total of all the numbers

const values = [10, 20.5, 5.99, 1.99, 60]

const totalValue = values.reduce((total, currValue) => {
  return total + currValue
})
// console.log(totalValue);


// 2 Turn an array of numbers into a long 
// string of all those numbers
const string = values.reduce((total, currValue) => {
  return total.toString() + currValue.toString()
})
// console.log(string, typeof(string));


// 3) Turn an array of voter objects into a count 
// of how many people voted.
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];

const howMany = voters.filter((voter) => voter.voted === true).length;

// console.log(howMany);

// 4) Given an array of all your wishlist items, figure
//  out how much it would cost to just buy everything at
//   once.
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const total = wishlist.reduce((totalValue, currItem) => {
  return totalValue + currItem.price
}, 0)

console.log(total);