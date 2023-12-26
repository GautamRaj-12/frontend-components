const showButton = document.querySelector('.show-button');
const closeButton = document.querySelector('.close');
const modalContainer = document.querySelector('.modal__container');

showButton.addEventListener('click', () => {
  modalContainer.classList.add('show-modal');
});

closeButton.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
});
