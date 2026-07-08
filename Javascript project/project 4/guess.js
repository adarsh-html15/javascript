let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number ')
    } else if (guess < 1) {
        alert('Please give number more than 1 .')
    } else if (guess > 100) {
        alert('Please enter a  number less than 100 .')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            dispalyGuess(guess)
            displayMassage(`game over. Ramdom number was ${randomNumber}`)
            endGame()
        } else {
            dispalyGuess(guess)
            chechGuess(guess)
        }
    }

}
//  this is the fuction for the check gusses in the game 
function chechGuess(guess) {
    if (guess === randomNumber) {
        displayMassage(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        dispalyGuess(`Your number is two low`)
    } else if (guess > randomNumber) {
        dispalyGuess(`Your number is two high`)
    }
}
//  this is for the check the gusess in the game...........
function dispalyGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
//  this is the game for the display the gusess....... 
function displayMassage(messages) {
    lowOrHi.innerHTML = `<h2>${messages}</h2>`
}
//  this is the function tho show the game is ended and there is no still credits in the game or you hve attepmts all the chances which is 10........... 
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
// This is the fuunction for the starting the new game and give new credits to the game player...............
}
function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function (p) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}









