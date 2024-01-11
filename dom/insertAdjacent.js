const h1 = document.querySelector('h1')

const h2 = document.createElement('h2')
h2.append('inserting in a h2')


// adding in a next sibling
h1.insertAdjacentElement("afterend", h2)