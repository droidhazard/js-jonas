'use strict';

console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'why'
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent)

console.log(document.querySelector('.number').textContent)
console.log(document.querySelector('.score').textContent)

document.querySelector('.number').textContent = 20
document.querySelector('.score').textContent = 13

document.querySelector('.guess').value = 11
console.log(document.querySelector('.guess').value)
