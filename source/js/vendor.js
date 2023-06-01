// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import Swiper from './vendor/swiper';

const swiper1 = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  keyboard: true,
  loop: true,

  breakpoints: {
    1300: {
      slidesPerView: 4,
      spaceBetween: 40,
      slideToClickedSlide: true,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 40,
      slideToClickedSlide: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slideToClickedSlide: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});

const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  keyboard: true,
  mousewheel: true,
});
