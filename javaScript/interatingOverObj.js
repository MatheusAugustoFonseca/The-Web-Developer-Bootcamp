const scores = {
  Matheus: 10,
  Nayara: 10,
  Luiza: 9
}

// for(person in scores){
//   console.log(person);
// }

// for(person in scores){
//   console.log(scores[person]);
// }

let person = Object.keys(scores)
console.log(person)

let grade = Object.values(scores)
console.log(grade)

let allInfos = Object.entries(scores)
console.log(allInfos)