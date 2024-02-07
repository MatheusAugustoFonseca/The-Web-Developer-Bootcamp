console.log("It is working")


// pokemon link:
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`


const container = document.getElementById('container');

for(let index = 1; index <= 151; index++){
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  const newDiv = document.createElement('div')
  newDiv.classList.add('pokemon')
  const label = document.createElement('span')
  const img = document.createElement('img')
  label.innerText = `#${index}`
  img.src = imgSrc
  newDiv.appendChild(label)
  newDiv.appendChild(img);

  container.appendChild(newDiv)
  console.log(index)
  
}
