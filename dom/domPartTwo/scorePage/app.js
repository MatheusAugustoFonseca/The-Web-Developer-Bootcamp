console.log('I am on');

const bttnPlusOne = document.querySelector('#plusbtnOne');
const bttnPlusTwo = document.querySelector('#plusbtnTwo');
const bttnReset = document.querySelector('#reseting');

const scoreOne = document.querySelector('#scoreOne');
const scoreTwo = document.querySelector('#scoreTwo');
const setMax = document.querySelector('#setMax');



let p1Counter = 0
let p2Counter = 0
let winningScore = 3

setMax.addEventListener('change', function(){
winningScore = parseInt(this.value);
console.log(winningScore);
reseting()
});

bttnPlusOne.addEventListener('click', function(){
  p1Counter += 1;
  scoreOne.textContent = p1Counter
  // console.log('btt one', p1Counter ,winningScore);
  if( p1Counter == winningScore){
    scoreOne.style.color = 'green'
    scoreTwo.style.color = 'red'
    bttnPlusOne.disabled = true
    bttnPlusTwo.disabled = true

  }
})

bttnPlusTwo.addEventListener('click', function(){
  p2Counter += 1;
  scoreTwo.textContent = p2Counter
  if( p2Counter === winningScore){
    scoreTwo.style.color = 'green'
    scoreOne.style.color = 'red'
    bttnPlusTwo.disabled = true
    bttnPlusOne.disabled = true
  }
})

bttnReset.addEventListener('click', reseting)

function reseting() {
  p1Counter = 0
  p2Counter = 0
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  bttnPlusTwo.disabled = false
  bttnPlusOne.disabled = false
  scoreTwo.style.color = 'black'
  scoreOne.style.color = 'black'
}