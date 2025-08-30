const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
};

// Display
const botDisplay = document.getElementById("bot");
const userDisplay = document.getElementById("user");
const resultDisplay = document.getElementById("result");
const botThinking = document.getElementById("bot-thinking");

// Buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const tryAgain = document.getElementById("try-again-btn");

// Input declaration
let userInput = "";
let botInput = "";
let botMindThinking = false;

// Display User Input
function displayUserInput() {
    userDisplay.innerText = choices[userInput] || "??";
}

// Display Bot Input
function displayBotInput() {
    botDisplay.innerText = choices[botInput] || "??";
}

// Returns "rock, paper, scissors" when called
function botRandomInput() {
    let randomNumber;
    // Random number generator (0-2)
    randomNumber = Math.floor(Math.random() * 3);

    // 0 = rock, 1 = paper, 2 = scissors
    if (randomNumber == 0) {
        botInput = "rock";
    } else if (randomNumber == 1) {
        botInput = "paper";
    } else {
        botInput = "scissors";
    }
}

function hideBtn() {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    tryAgain.style.display = "inline-block";
}

// Reset & Show Buttons
tryAgain.addEventListener("click", () => {
    userInput = "";
    botInput = "";
    botDisplay.innerText = "";
    userDisplay.innerText = "";
    resultDisplay.innerText = "";

    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";
    tryAgain.style.display = "none";
});

// Rock Button
rock.addEventListener("click", () => {
    userInput = "rock";
    displayUserInput();
    botRandomInput();
    displayBotInput();

    if (botInput == "scissors") {
        resultDisplay.innerText = "You Win";
    } else if (botInput == "rock") {
        resultDisplay.innerText = "Draw";
    } else resultDisplay.innerText = "You Lose";

    hideBtn();
});

// Paper Button
paper.addEventListener("click", () => {
    userInput = "paper";
    displayUserInput();
    botRandomInput();
    displayBotInput();

    if (botInput == "rock") {
        resultDisplay.innerText = "You Win";
    } else if (botInput == "paper") {
        resultDisplay.innerText = "Draw";
    } else resultDisplay.innerText = "You Lose";

    hideBtn();
});

// Scissors Button
scissors.addEventListener("click", () => {
    userInput = "scissors";
    displayUserInput();
    botRandomInput();
    displayBotInput();

    if (botInput == "paper") {
        resultDisplay.innerText = "You Win";
    } else if (botInput == "scissors") {
        resultDisplay.innerText = "Draw";
    } else resultDisplay.innerText = "You Lose";

    hideBtn();
});
