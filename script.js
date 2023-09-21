'use strict'

const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelector('.close-modal');
const closeBtn = document.querySelector('.btn-arrow');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
function OpenModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click', OpenModal)

btnCloseModal.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);

