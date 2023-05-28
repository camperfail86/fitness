import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

const tabsBtn = document.querySelectorAll('.abonements__item');

tabsBtn.forEach(function (item) {
  item.addEventListener('click', () => {

    tabsBtn.forEach(function (i) {
      i.classList.remove('abonements__item--active');
    });

    item.classList.add('abonements__item--active');
  });
});

const treners = document.querySelector('.treners__price--1');
const trenersBackground = document.querySelector('.treners__price--1-background');
const day = document.querySelector('.day__price--1');
const dayBackground = document.querySelector('.day__price--1-background');
const fullDay = document.querySelector('.full-day__price--1');
const fullDayBackground = document.querySelector('.full-day__price--1-background');

// 51000 12 месяцев тренер

tabsBtn[0].addEventListener('click', () => {
  treners.textContent = '5000';
  trenersBackground.textContent = '5000';
  day.textContent = '1700';
  dayBackground.textContent = '1700';
  fullDay.textContent = '2700';
  fullDayBackground.textContent = '2700';
});

tabsBtn[1].addEventListener('click', () => {
  treners.textContent = '27000';
  trenersBackground.textContent = '27000';
  day.textContent = '9200';
  dayBackground.textContent = '9200';
  fullDay.textContent = '14200';
  fullDayBackground.textContent = '14200';
});

tabsBtn[2].addEventListener('click', () => {
  treners.textContent = '53000';
  trenersBackground.textContent = '53000';
  day.textContent = '17500';
  dayBackground.textContent = '17500';
  fullDay.textContent = '26000';
  fullDayBackground.textContent = '26000';
});


const video = document.querySelector('.gym__div');
const playVideo = document.querySelector('.gym__play');

video.addEventListener('click', () => {
  playVideo.style.display = 'none';
  video.insertAdjacentHTML('afterbegin', '<iframe class="gym__iframe" width="364" height="200" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
