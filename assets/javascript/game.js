//display blanks for # of letters
//reveal letter if correct

let archerWords = ['archer', 'malory', 'pam', 'sterling', 'lana', 'cheryl', 'krieger', 'cyril', 'ray', 'barry', 'cadillac', 'woodhouse', 'trexler', 'katya', 'nikolai', 'brett', 'slater', 'reynolds', 'vice', 'dreamland', 'danger', 'isis', 'ants', 'phrasing'];

let html = ``;

// setting up empty arrays for correct/incorrect guesses
let correct = [];
let incorrect = [];

// Variable to count remaining guesses
let guessesLeft = 8
li = document.querySelector('.guesses')
li.innerHTML = guessesLeft;

// Variable to count number of wins
let wins = 0

// Pick random word from array and split letters into new array
let compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]).split('');

let answerArray = [];
for (let i = 0; i < compGuess.length; i++) {
  answerArray[i] = ' _';
}

li = document.querySelector('.answerArray')
li.innerHTML = answerArray.join(' ');

function reset(){
  correct = [];
  incorrect = [];
  compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]).split('');
  answerArray = [];
  for (let i = 0; i < compGuess.length; i++) {
    answerArray[i] = '_';
  }
  li = document.querySelector('.answerArray')
  li.innerHTML = answerArray.join(' ');
  guessesLeft = 8;
  li = document.querySelector('.guesses')
  li.innerHTML = guessesLeft;
  li = document.querySelector('.letters')
  li.innerHTML = incorrect.join(' ');
}

// Log user guess
document.onkeyup = function() {
  let userguess = String.fromCharCode(event.keyCode).toLowerCase();

  if (compGuess.includes(userguess) === true && correct.includes(userguess) === false) {
    correct.push(userguess);
    for (let j = 0; j < compGuess.length; j++) {
      if (compGuess[j] === userguess) {
        answerArray[j] = userguess;
      }
    }
    li = document.querySelector('.answerArray')
    li.innerHTML = answerArray.join(' ');
  } else if (compGuess.includes(userguess) !== true && incorrect.includes(userguess) === false) {
    incorrect.push(userguess);
    guessesLeft --;
    li = document.querySelector('.guesses')
    li.innerHTML = guessesLeft;
    li = document.querySelector('.letters')
    li.innerHTML = incorrect.join(' ');
  } else {
    alert(`Please choose a new letter`);
  }
  if (new Set(compGuess).size === correct.length) {
    wins++;
    li = document.querySelector('.wins')
    li.innerHTML = `Wins: ${wins}`;
    reset();
  }
  if (guessesLeft === 0) {
    for (let k = 0; k < compGuess.length; k++) {
        answerArray[k] = compGuess[k];
    }
    li = document.querySelector('.answerArray')
    li.innerHTML = answerArray.join(' ');
  }
}