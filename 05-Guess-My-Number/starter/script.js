'use strict';

// console.log(document.querySelector('.message').textContent)
// // document.querySelector('.message').textContent = 'why'
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent)

// console.log(document.querySelector('.number').textContent)
// console.log(document.querySelector('.score').textContent)

// document.querySelector('.number').textContent = 20
// document.querySelector('.score').textContent = 13

// document.querySelector('.guess').value = 11
// console.log(document.querySelector('.guess').value)

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(typeof guess, guess)

  // ^ When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  
    // ^ When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  } else if (guess > secretNumber) {

    // ^ When the guess is too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high'
      score--;
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretNumber) {

    // ^ When the guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low'
      score--;
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game'
      document.querySelector('.score').textContent = 0
    }
  }
})

