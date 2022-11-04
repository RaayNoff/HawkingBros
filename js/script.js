import storageApi from './localStorageApi.js';

const body = document.querySelector('body');
const colorInput = document.querySelector('.color__input');
const form = document.querySelector('.color');

const contentLoadedHandler = () => {
  const color = storageApi.getBackground();

  if (color !== 'empty') {
    body.style.background = color;
    colorInput.value = color;
  }
};

const formSubmitHandler = (e) => {
  e.preventDefault();
  body.style.background = colorInput.value;
  storageApi.setBackground(colorInput.value);
};

document.addEventListener('DOMContentLoaded', contentLoadedHandler);
form.addEventListener('submit', formSubmitHandler);
