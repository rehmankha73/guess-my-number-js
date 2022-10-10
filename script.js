'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Answer';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // No input case
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a number!';
  }

  // Wining case
  else if(guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = String(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = String(highscore);
    }
  }

  // greater case
  else if(guess > secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }

  // lower case
  else if(guess < secretNumber) {
    if(score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = String(score);
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
});


document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = String(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});