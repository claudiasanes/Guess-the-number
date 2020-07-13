'use strict';

const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

function addButtonListener() {
  const btn = document.querySelector('.js-button');
  btn.addEventListener('click', guessTheNumber);
}

addButtonListener();

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function guessTheNumber(ev) {
  const randomNumber = getRandomNumber(100);
  ev.preventDefault();
  let inputValue = input.value;
  if (inputValue > 100 || inputValue < 1) {
    updateCounter();
    clue.innerHTML = 'El número debe estar entre 1 y 100 🙂';
  } else if (inputValue > randomNumber) {
    updateCounter();
    clue.innerHTML = 'Demasiado alto 😉';
  } else if (inputValue < randomNumber) {
    updateCounter();
    clue.innerHTML = 'Demasiado bajo 😉';
  } else {
    updateCounter();
    clue.innerHTML = '🔮Lo has adivinado 🔮';
  }
}

function updateCounter() {
  let counterNumber = parseInt(counter.innerHTML);
  counterNumber = counterNumber + 1;
  counter.innerHTML = counterNumber;
}
