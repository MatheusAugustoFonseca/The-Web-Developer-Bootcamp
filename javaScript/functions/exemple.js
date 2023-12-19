// Solution 1
// function capitalize(str) {
//   let first = str[0].toUpperCase()
//   let replacing = str.replace(str[0], first)
//   // console.log(replacing);
//   return (console.log(replacing))
// }

//Solution 2
function capitalize(str) {
  let first = str[0].toUpperCase()
  let slicing = str.slice(1)
  let newStr = first + slicing
  return newStr

}

capitalize('squid')
