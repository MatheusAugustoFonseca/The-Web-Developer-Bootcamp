const input = document.querySelector('#name')
const form = document.querySelector('#form')
const list = document.querySelector('#list')

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(input.value);
  console.log("Submited!");
  const newPlant = document.createElement('li')
  const plantName = input.value;
  newPlant.innerText = plantName;
  // console.log(newPlant);
  list.append(newPlant)
  input.value = ""

})