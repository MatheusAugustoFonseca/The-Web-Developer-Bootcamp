console.log('hi there');

// random number
const randomNumb = () => {
  const number = Math.floor(Math.random() * 256);
  return number
}
// console.log(randomNumb());

// random color RGB
const newColor = () => {
  const one = randomNumb();
  const two = randomNumb();
  const three = randomNumb();
  return `rgb(${one}, ${two}, ${three})`
}

// get btn
const btn = document.querySelector('#randomBtn')
const colorsRgn = document.createElement('h3');

btn.addEventListener('click', () => {
  const newRGB = newColor();
  document.body.style.backgroundColor = `${newRGB}`
  colorsRgn.innerText = `${newRGB}`;
  document.body.appendChild(colorsRgn)

})
