new ChiefSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 5000,
  swipe: true,
  refresh: false
});

document.addEventListener('DOMContentLoaded', function () {
  new ChiefSlider('.slider');
});



const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach(link => {
  let arrow = link.querySelector('.page-link__arrow');
  link.addEventListener('mouseover', () => arrow.classList.remove('page-link__arrow_hidden'));
  link.addEventListener('mouseout', () => arrow.classList.add('page-link__arrow_hidden'));
});