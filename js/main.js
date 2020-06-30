'use strict';

const btn = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

let counterNumber = parseInt(counter.innerHTML);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function guessTheNumber(ev) {
  ev.preventDefault();
  let inputValue = input.value;
  if (inputValue > randomNumber) {
    updateCounter();
    clue.innerHTML = 'Demasiado alto';
  } else if (inputValue < randomNumber) {
    updateCounter();
    clue.innerHTML = 'Demasiado bajo';
  } else if (inputValue >= 101 || inputValue <= -1) {
    updateCounter();
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  } else {
    updateCounter();
    clue.innerHTML = 'Has ganado campeona!!!';
  }
}

function updateCounter() {
  counterNumber = counterNumber + 1;
  console.log(counterNumber);
  counter.innerHTML = counterNumber;
}

btn.addEventListener('click', guessTheNumber);
