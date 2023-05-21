// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});


