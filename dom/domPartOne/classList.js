const h2 = document.querySelector('h2')

h2.classList
h2.classList.add('border')

h2.classList.remove('border')
h2.classList.contains('border')

// turn on and off
h2.classList.toggle('border')


const getAllLi = document.querySelectorAll('li');

getAllLi.classList.toggle('highlight')