// DOM-элемент меню
const menu = document.querySelector('#header-menu');

// DOM-элемент кнопки-бургера
const menuButton = document.querySelector('#burger-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu_hidden');
});