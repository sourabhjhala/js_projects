const randomNumbers = Math.floor(Math.random() * 100 + 1);
const userInput = document.getElementById("inpt");
const submit = document.getElementById("btn");
const previousMsg = document.getElementById("previous");
const remainingMsg = document.getElementById("remaining");
const result = document.getElementById("hiiORlow");
const resultField = document.querySelector(".result-field");

let p = document.createElement("p");
let previousGuess = [];
let remainNums = 1;

let playGame = true;

if (playGame) {

    submit.addEventListener("click", function () {
        const guess = parseInt(userInput.value);
        vailidateGuess(guess)

    })
}


function vailidateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage(`Please Enter A Valid Number`)
    } else if (guess === "") {
        displayMessage(`Please Enter A number`)
    } else if (guess < 1) {
        displayMessage(`Please Enter A More Then 1`)
    } else if (guess > 100) {
        displayMessage(`Please Enter A Less Then 100`)
    } else {
        previousGuess.push(guess);
        if (remainNums === 10) {
            cleanUpGuess(guess);
            displayMessage(`Game Over Random Number Was ${randomNumbers}`)
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {

    if (guess === randomNumbers) {
        displayMessage(`You Won The Game`);
        endGame();
    } else if (guess < randomNumbers) {
        displayMessage(`Number is too Low`)
    } else if (guess > randomNumbers) {
        displayMessage(`Number is too high`)
    }
}

function cleanUpGuess(guess) {
    userInput.value = "";
    previousMsg.innerHTML += `${guess} ,`;
    remainNums++;
    remainingMsg.innerHTML = `${11 - remainNums}`
}

function displayMessage(message) {
    result.innerHTML = `${message}`
    result.style.display = "block"

}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "")
    p.innerHTML = `<h2 id="newGame" class="text-white bg-slate-400 p-1 cursor-pointer rounded-full">Start</h2>`
    resultField.appendChild(p);
    playGame = false;
    startGame();
}
function startGame() {
    const startNewGame = document.getElementById("newGame");
    startNewGame.addEventListener("click", () => {

        const randomNumbers = Math.floor(Math.random() * 100 + 1);
        userInput.removeAttribute("disabled", "");
        submit.removeAttribute("disabled", "");
        previousGuess = [];
        remainNums = 1;
        previousMsg.innerHTML = "";
        remainingMsg.innerHTML = `${11 - remainNums}`;
        resultField.removeChild(p);
        displayMessage(`Welcome To Number Guessing Game`);
        playGame = true;

    })
}