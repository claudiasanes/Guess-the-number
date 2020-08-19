'use strict';

const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');
const resetButton = document.querySelector('.js-reset');

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
    clue.innerHTML = 'It must be between 1 and 100 🙂';
  } else if (inputValue > randomNumber) {
    updateCounter();
    clue.innerHTML = "The number it's too low 😉";
  } else if (inputValue < randomNumber) {
    updateCounter();
    clue.innerHTML = "the number it's too high 😉";
  } else {
    updateCounter();
    clue.innerHTML = '🔮You guessed it, genious 🔮';
  }
}

function updateCounter() {
  let counterNumber = parseInt(counter.innerHTML);
  counterNumber = counterNumber + 1;
  counter.innerHTML = counterNumber;
}

function reload() {
  location.reload();
}

resetButton.addEventListener('click', reload);
