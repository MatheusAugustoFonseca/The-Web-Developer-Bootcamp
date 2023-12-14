let number = parseInt(prompt("Enter  max number value"));
while(!number) {
  number = parseInt(prompt("Enter a valid number"));
}

let targetNum = Math.floor(Math.random() * number) + 1
console.log(targetNum)

let userGuess = parseInt(prompt("Enter your first guess"))
let counting = 1

while(userGuess !== targetNum) {
  if(userGuess > targetNum) {
    userGuess = parseInt(prompt("Insert a smaller number"))
    counting++
  } else {
    userGuess = parseInt(prompt("Insert a bigger number"))
    counting++
  }
} 
  alert(`You Win, it took ${counting} chances`)