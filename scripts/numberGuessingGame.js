const guessForm = document.querySelector('.guessForm');
const prevGuess = document.querySelector('.prevGuess');
const result = document.querySelector('.result');
let randomNumber = Math.floor(Math.random()*100)+1;
let guessCount = 0;
let prevClass = '';
const gameOver = () => {
    //disable text input
    guessForm.guess.setAttribute('disabled', 'true');
    //create reset button
    guessForm.parentElement.insertAdjacentHTML("beforeend",'<button ID="reset">Reset Game</button>');
    document.querySelector('#reset').addEventListener('click', reset);
    document.querySelector('#reset').focus();
}
const reset = function(){
    //generate a new random number
    randomNumber = Math.floor(Math.random()*100)+1;
    guessCount = 0;
    guessForm.guess.removeAttribute('disabled');
    result.innerHTML = '';
    prevGuess.innerHTML = '';
    document.querySelector('#reset').remove();
}
guessForm.addEventListener('submit', e => {
    e.preventDefault();
    guessCount ++;
    let guess = Number(guessForm.guess.value);
    guessForm.guess.value = '';
    //initalize prev. guesses display on first guess
    if(guessCount === 1){prevGuess.innerHTML = 'Previous Guesses:'};
    //check guess
    if(guess === randomNumber){
        //justRight
        result.innerHTML = '<span class="justRight">Correct!! Good Job!</span>'
        gameOver();
    }else{
        //report if low or high and set class of prev for colorization
        if(guess < randomNumber){
            //Too Small
            result.innerHTML = '<span class="tooSmall">WRONG, That guess was too small</span>'
            prevClass = 'prevTooSmall'
        }else{
            //Too Big
            result.innerHTML = '<span class="tooBig">WRONG, That guess was too big</span>'
            prevClass = 'prevTooBig'
        };
        //Add guess to previous guesses
        prevGuess.innerHTML += `<span class='${prevClass}'> ${guess}</span>`;
        //game over on 10th guess
        if(guessCount === 10){
            result.innerHTML = '<span class="tooMany">You have no guesses left!</span>'
            gameOver();
        };
    };
});