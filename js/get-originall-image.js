'use strict';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  modalWin: document.querySelector('.js-lightbox'),
  bigImage: document.querySelector('img.lightbox__image'),
};

let focusedLi;

refs.galleryList.addEventListener('click', handleClickOnGallery);

function handleClickOnGallery(event) {
  event.preventDefault();
  focusedLi = event.target.closest('li.galery__item');

  if (event.currentTarget === event.target) {
    return;
  }
  openModalWin();
  const bigImageUrl = event.target.dataset.source;
  const bigImageAlt = event.target.getAttribute('alt');
  generateOrigImg(bigImageUrl, bigImageAlt);
}

function openModalWin() {
  refs.modalWin.classList.add('is-open');
  refs.modalWin.addEventListener('click', event => closeModal());
  window.addEventListener('keydown', handleKeyPressClose);
  window.addEventListener('keydown', handleKeyPressLeaf);
}

function generateOrigImg(url, alt) {
  const image = refs.bigImage;
  image.setAttribute('src', url);
  image.setAttribute('alt', alt);
}

function handleKeyPressClose(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

function handleKeyPressLeaf(event) {
  let nextLi;
  if (event.code === 'ArrowRight') {
    nextLi = focusedLi.nextElementSibling;
  } else if (event.code === 'ArrowLeft') {
    nextLi = focusedLi.previousElementSibling;
  } else {
    return;
  }

  if (!nextLi) {
    return;
  }
  focusedLi = nextLi;

  const newImg = nextLi.querySelector('img.gallery__image');
  console.log(newImg);
  const newImgUrl = newImg.dataset.source;
  const newImgAlt = newImg.getAttribute('alt');

  closeModal();
  openModalWin();
  generateOrigImg(newImgUrl, newImgAlt);
}

function closeModal() {
  const image = refs.bigImage;
  if (event.target === image) {
    return;
  }
  refs.modalWin.classList.remove('is-open');
  image.removeAttribute('src');
  window.removeEventListener('keydown', handleKeyPressClose);
  window.removeEventListener('keydown', handleKeyPressLeaf);
}
