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

let correct = []

let incorrect = []

document.onkeyup = function() {
    let userguess = String.fromCharCode(event.keyCode).toLowerCase();

      console.log(userguess);
}

for (let compGuess = (archerWords[Math.floor(Math.random()*archerWords.length)]), split = compGuess.split(''); split.length > correct;) {

console.log(split);
break;
}