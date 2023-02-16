'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const hideModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal)
}

overlay.addEventListener('click', hideModal)
btnCloseModal.addEventListener('click', hideModal)

document.addEventListener('keydown', (e) => {
  const isModalVisible = !modal.classList.contains('hidden')
  
  if (e.key === 'Escape' && isModalVisible) {
    hideModal()
  }
})