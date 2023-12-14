// for(let i = 0; i <= 20; i += 2){
//   console.log(i)
// }

// for(let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// const animals = ['lion', 'elephant', 'tiger', 'giraffe', 'zebra', 'monkey'];
// for(let i = 0; i <= animals.length -1; i++){
//   console.log(i, animals[i]);
// }


const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for(let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   for(let j = 0; j < row.length; j++) {
//     console.log(row[j])
//   }
// }

for(row of seatingChart) {
  for(student of row){
    console.log(student);
  }
}