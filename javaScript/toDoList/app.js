let comand = prompt("What you would like to do?");
const toDoList = []

while (comand !== 'quit') {
  comand = prompt("What you would like to do?");
  if(comand === 'new'){
    const newActivity = prompt("Please insert an activity")
    toDoList.push(newActivity)
    console.log(`${newActivity} added to the list`)
  }else if(comand === 'list'){
    console.log('****************')
    for(let index = 0; index < toDoList.length; index++){
      console.log(`${index + 1}: ${toDoList[index]}`)
    }
    console.log('****************')
  } else if (comand === 'delete') {
    const deletingInput = parseInt(prompt("Please insert the number of activity that you want to remove"))
      if(deletingInput === Number || deletingInput <= toDoList.length) {
        let deleting = toDoList.splice(deletingInput - 1, 1)
        console.log(`${deleting} is removed from your list`)
      }
      else {
        console.log("Please insert a valid number");
      }

  }
}
console.log("See you soon");