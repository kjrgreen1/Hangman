//display blanks for # of letters
//reveal letter if correct
//track number of wins

let archerWords = ['archer', 'malory', 'pam', 'sterling', 'lana', 'cheryl', 'krieger', 'cyril', 'ray', 'barry', 'cadillac', 'woodhouse', 'trexler', 'katya', 'nikolai', 'brett', 'slater', 'reynolds', 'vice', 'dreamland', 'danger', 'isis', 'ants', 'phrasing'];

// setting up empty arrays for correct/incorrect guesses
let correct = [];
let incorrect = [];

// Variable to count remaining guesses
let guessesLeft = 8

// Variable to count number of wins
let wins = 0

// Pick random word from array and split letters into new array
let compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]), split = compGuess.split('');

console.log(split);

let answerArray = [];
for (let i = 0; i < compGuess.length; i++) {
  answerArray[i] = '_ ';
}

// Log user guess
document.onkeyup = function() {
  let userguess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(userguess);

  if (split.includes(userguess) === true && correct.includes(userguess) === false) {
    correct.push(userguess);
    for (let j = 0; j < compGuess.length; j++) {
      if (compGuess[j] === userguess) {
        answerArray[j] = userguess;
      }
    }
    console.log(correct);
    console.log(answerArray);
  } else if (split.includes(userguess) !== true && incorrect.includes(userguess) === false) {
    incorrect.push(userguess);
    console.log(incorrect);
    guessesLeft --;
  } else {
    console.log(`Please guess again`)
  }
  if (new Set(split).size === correct.length) {
    wins ++;
    correct = [];
    incorrect = [];
    compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]), split = compGuess.split('');
    console.log(split);
  }
  if (guessesLeft === 0) {
    //reveal answer
  }
}