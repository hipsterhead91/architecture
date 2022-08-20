// DOM-элемент меню
const menu = document.querySelector('#header-menu');

// DOM-элемент кнопки-бургера
const menuButton = document.querySelector('#burger-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('header__menu_hidden');
});


const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach(link => {
  let arrow = link.querySelector('.page-link__arrow');
  link.addEventListener('mouseover', () => arrow.classList.remove('page-link__arrow_hidden'));
  link.addEventListener('mouseout', () => arrow.classList.add('page-link__arrow_hidden'));
});


const overlay = document.querySelector('.details__overlay');
const phone = document.querySelector('.details__contact');

phone.addEventListener('mouseover', () => {
  overlay.classList.add('details__overlay_blurred')
})

phone.addEventListener('mouseout', () => {
  overlay.classList.remove('details__overlay_blurred')
})





new ChiefSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 8000,
  swipe: true,
  refresh: false
});

document.addEventListener('DOMContentLoaded', function () {
  new ChiefSlider('.slider');
});

