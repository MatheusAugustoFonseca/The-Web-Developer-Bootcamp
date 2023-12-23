const daysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
}
// const values = Object.values(daysOfWeek);
// console.log(values);
console.log(Object.entries(daysOfWeek));
// console.log(daysOfWeek[1]);



function returnDay (num) {
  if (num == daysOfWeek["num"]) {
      return console.log(daysOfWeek["num"])
  } else {
      return null
  }
}
// returnDay(2)
// console.log(daysOfWeek["7"])

// let currentIndex = 0;

// function getNextValue() {
//   const values = Object.values(daysOfWeek);
//   if (currentIndex >= values.length) {
//     return null; // Return null if all values have been returned
//   }
//   const value = values[currentIndex];
//   currentIndex++;
//   return value;
// }

