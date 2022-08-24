new ChiefSlider('.slider', {
  loop: true,
  autoplay: true,
  interval: 8000,
  swipe: true,
  refresh: false,
});

document.addEventListener('DOMContentLoaded', function () {
  new ChiefSlider('.slider');
});