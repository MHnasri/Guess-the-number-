
let randomNumber = Math.floor(Math.random()*100)+1;
    
const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById("guessSubmit"); 
const guesses = document.getElementById('guesses');
const chances = document.getElementById('chances');
const lastResult = document.getElementById('lastResult');
const lowOrhigh = document.getElementById('lowOrhigh');

const resultColor = document.getElementById('lastResult');

let guessCount = 1;

function checkNumber() {
 let userGuess = Number(guessField.value);
 
 if(guessCount === 1){
     guesses.textContent = 'Perivous guesses: ';
     chances.textContent = '';
 }
 
    guesses.textContent += userGuess + '_'
    chances.textContent = 'Chances left = ' + (3-guessCount); 

 if(userGuess === randomNumber){
    lastResult.textContent = 'You win !';
    resultColor.style.backgroundColor = 'green';
    lowOrhigh.textContent = '';
    gameEnd();
 } else if(guessCount === 3) {
    lastResult.textContent = 'You Lost !'
    resultColor.style.backgroundColor = 'red';
    lowOrhigh.textContent = '';
    gameEnd();
 } else {
    
         lastResult.textContent = 'Wrong !'
         resultColor.style.backgroundColor = 'orange';
         if(userGuess < randomNumber){
          lowOrhigh.textContent = 'Your guess is low';
          } else if (userGuess > randomNumber){
          lowOrhigh.textContent = 'Your guess is high';
          }
 }

 guessCount++;
 guessField.value = '';
 guessField.focus();

}

 guessSubmit.addEventListener("click", checkNumber)

function gameEnd() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);
}

/*at first you can't restart
you have to finish game ones and then you are free to use 
restart whenever you want*/
function resetGame() {
    guessCount = 1;
  
    guessField.disabled = false;
    guessSubmit.disabled = false;

    const result = document.querySelectorAll('#result p');
    for(let i = 0; i< result.length; i++){
        result[i].textContent = '';
    }

    guessField.value = '';
    guessField.focus();

    //if you don't do this the number is same as previous number!
    randomNumber = Math.floor(Math.random()*100)+1;
}


