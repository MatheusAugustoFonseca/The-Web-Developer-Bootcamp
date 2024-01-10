/* ARGUMENTS Object

Are avaible inside every function
You can have access to all arguments used inside the function

special word is = arguments

*/

// exemple
function sum(...nums) {
  return nums.reduce((total, num) => total + num)
}


console.log(sum(1, 2, 5))

// example 2
function sumArguments() {
  return console.log(arguments)
}

sumArguments(3, 6, 10)