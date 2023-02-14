'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal)

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent)
  btnsOpenModal[i].addEventListener('click', () => {
    console.log("Button clicked")
    console.log(btnsOpenModal[i].textContent)
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  })

  document.body.addEventListener('keypress', (e) => {
    console.log(e)
  })
}

overlay.addEventListener('click', () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
})
btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
})