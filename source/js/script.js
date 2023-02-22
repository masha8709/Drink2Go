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
