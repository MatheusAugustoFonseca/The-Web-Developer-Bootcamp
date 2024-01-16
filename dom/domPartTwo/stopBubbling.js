// to stop bubbling from ocur, use
// stopPropagation();

const button = document.querySelector('button');

button.addEventListener('click', function(e) {
  container.style.backgroundColor = rgb(50, 60, 70);
  e.stopPropagation();
})