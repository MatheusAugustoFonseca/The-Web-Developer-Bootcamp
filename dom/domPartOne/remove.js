// REMOVE CHILD
const firstLi = document.querySelector('li')

// first find the parent element

const parent = firstLi.parentElement
parent.removeChild(firstLi)

// REMOVE
firstLi.remove()