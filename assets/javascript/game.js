//log user guess
//pull random word
//display blanks for # of letters
//compare letter to letters in word
//reveal letter if correct
//track used letters
//track number of guesses
//repeat 
//track number of wins

let archerWords = ['archer', 'malory', 'pam', 'sterling', 'lana', 'cheryl', 'krieger', 'cyril', 'ray', 'barry', 'cadillac', 'woodhouse', 'trexler', 'katya', 'nikolai', 'brett', 'slater', 'reynolds', 'vice', 'dreamland', 'danger', 'isis', 'ants', 'phrasing'];

let correct = [];

let incorrect = [];

let compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]), split = compGuess.split('');

console.log(split);

document.onkeyup = function() {
  let userguess = String.fromCharCode(event.keyCode).toLowerCase();

  console.log(userguess);

  console.log(new Set(split).size);

  if (new Set(split).size > correct.length) {

    let answer = split.includes(userguess);

    console.log(answer)

    if (answer === true && correct.includes(userguess) === false) {
      correct.push(userguess);
      console.log(correct);
    } else if (answer !== true && incorrect.includes(userguess) === false) {
      incorrect.push(userguess);
      console.log(incorrect);
    } else {
      console.log(`Please guess again`)
    }
    if (new Set(split).size === correct.length) {
      correct = [];
      incorrect = [];
      compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]), split = compGuess.split('');
      console.log(split);
    }
  
  } 
}