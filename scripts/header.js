const menu = document.querySelector('#header-menu');
const burgerButton = document.querySelector('#burger-button');

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu_hidden');
});