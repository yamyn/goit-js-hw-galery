'use strict';

import images from './gallery-items.js';

function createGaleryItem({ preview, description, original }) {
  return `
  <li class="galery__item">
  <a href="${original}" class="gallery__link">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
  </a>
  </li>`;
}

const newGaleryItems = images.map(image => createGaleryItem(image)).join('');

const galeryList = document.querySelector('.js-gallery');
galeryList.insertAdjacentHTML('beforeend', newGaleryItems);
