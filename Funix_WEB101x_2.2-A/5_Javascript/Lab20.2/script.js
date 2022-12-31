'use strict';

// select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// initialize condition
const init = function () {
    scores = [0,0];
    currentScore = 0;
    
    playing = true;
    // set all scores to 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    // do not display dice.
    diceEl.classList.add('hidden');
    // set player 1 as starting player
    activePlayer = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
 }
init();


const switchPlayer = function () {
    // reset current score
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

// User roll dice 
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generate random dice roll from 1 to 6
        const dice = Math.trunc(Math.random() * 6) + 1;
        //2. Display dice roll
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3. Check dice if it is 1
        if (dice !== 1) {
            //4. Add dice roll to current score
            currentScore+=dice;
            console.log("currentScore", currentScore);
            //5. Display new score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //6. Switch player
            switchPlayer();
        }  
    }
});

// User hold score
btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to total score
        scores[activePlayer] += currentScore;
        //2. Display activePlayer's score
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] ;
        //3. Check if player's score is >= 100
        if (scores[activePlayer] > 100) {
            // finish
            playing = false;
            // do not display dice.
            diceEl.classList.add('hidden');
            // set winner css for player
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

// User reset game
btnNew.addEventListener('click', init);