/* в этот файл добавляет скрипты*/
let navigation = document.querySelector('.navigation');
let navToggle = document.querySelector('.nav__button-toggle');

navigation.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('nav--closed')) {
    navigation.classList.remove('nav--closed');
    navigation.classList.add('nav--opened');
  } else {
    navigation.classList.add('nav--closed');
    navigation.classList.remove('nav--opened');
  }
});
