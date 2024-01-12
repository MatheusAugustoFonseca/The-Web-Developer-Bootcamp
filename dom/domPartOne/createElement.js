// just create without put in the screen (without append)
const newImg = document.createElement('img')

// append means to insert in the page
document.body.appendChild(newImg)

const newH3 = document.createElement('h3');

newH3.innerText = 'Inserting a H3';
document.body.appendChild(newH3)