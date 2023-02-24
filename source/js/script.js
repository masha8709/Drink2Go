/* в этот файл добавляет скрипты*/
'use strict'

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

////////КАРТА

const map = L.map('map')
  .setView([59.968338, 30.317366], 17);

L.tileLayer(
  'https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '(c) OSM contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: './img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [0, 50],
});

const pinMarker = L.marker([59.968338, 30.317366], {
    icon: pinIcon
  })
  .addTo(map);

// //Сортировка

const sort = document.querySelector('.sort');
const sortSelectButton = sort.querySelector('.sort__button');
const sortList = sort.querySelector('.sort__list');
const sortLinks = sortList.querySelectorAll('.sort__link');

sortSelectButton.addEventListener('click', () => {
  sortList.classList.toggle('sort__list--open');
  sortSelectButton.classList.toggle('sort__button--open');
});

sortList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const sortSelectType = evt.target;

  sortLinks.forEach((link) => {
    link.classList.remove('sort__link--active');
  });

  sortSelectType.classList.add('sort__link--active');
  sortList.classList.remove('sort__list--open');
  sortSelectButton.classList.remove('sort__list--open');
  sortSelectButton.textContent = sortSelectType.textContent;
});


/////Слайдер

const slider = document.querySelector('.slider__list');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('.slider__button-next');
const btnPrev = document.querySelector('.slider__button-prev');

sliderItems.forEach(function (slide, index) {
	if (index !== 0) slide.classList.add('hidden');
	slide.dataset.index = index;

	sliderItems[0].setAttribute('data-active', '');

	slide.addEventListener('click', function () {
		showNextSlide('next');
	});
});

btnNext.onclick = function () {
	showNextSlide('next');
};

btnPrev.onclick = function () {
	showNextSlide('prev');
};

function showNextSlide(direction) {
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}
