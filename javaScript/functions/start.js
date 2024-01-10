function greeting(name){
  console.log(`Hi, ${name}. How are you today?`)
}

// greeting('Matheus')
// greeting('Ana')

// function repeting(string, times){
//   for(let i = 0; i < times; i++) {
//     console.log(string);
//   }
// }

function repeting(string, times){
  let result = ''
  for(let i = 0; i < times; i++) {
    result += string
    console.log(result);
  }
}
repeting("Matheus", 3)
