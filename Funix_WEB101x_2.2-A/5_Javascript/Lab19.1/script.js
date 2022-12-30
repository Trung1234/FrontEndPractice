'use strict';

// create number form 1 to 20
let random = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  
document.querySelector('.check').addEventListener('click', function () { 
   const guess = Number(document.querySelector('.guess').value);
   if (!guess) {
      // when input empty string or not a number
      displayMessage("Please input a number")
   } else {
      if (guess === random) {
        // win when guessing the right secret number
        displayMessage("You win !");

        document.querySelector('.number').textContent = random;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // set highscore after win
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        displayMessage(guess > random ? "Too high !" : "Too low !" );
        score--;
        document.querySelector('.score').textContent = score;
      }
   }
   console.log('secret number', random);
   console.log(guess, typeof guess);
})

// event when click on again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    // reset secret number
    random = Math.floor(Math.random() * 20) + 1;
  
    displayMessage('Start guessing...');
    // reset css
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  