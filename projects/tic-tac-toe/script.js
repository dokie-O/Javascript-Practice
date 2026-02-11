const board = document.getElementById("board");
const currentPlayerDisplay = document.getElementById("current-player");
const displayWinner = document.getElementById("winner-dialog");
const resetButton = document.getElementById("reset-btn");
const winner = document.getElementById("winner");
const overlayDisplay = document.querySelector(".overlay");

const arr = [];
const ROW_COUNT = 3;
const COL_COUNT = 3;

let currentUser = "X";

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for (let i = 0; i < ROW_COUNT; i++) {
    arr[i] = [];
    for (let j = 0; j < COL_COUNT; j++) {
        arr[i][j] = "";

        const cell = document.createElement("button");
        cell.textContent = "";
        cell.addEventListener("click", userClick);
        board.appendChild(cell);
    }
}

resetButton.addEventListener("click", resetBoard);

function userClick(e) {
    const index = Array.from(board.children).indexOf(e.target);
    const row = Math.floor(index / COL_COUNT);
    const col = index % COL_COUNT;

    if (arr[row][col] !== "") return;

    arr[row][col] = currentUser;
    e.target.textContent = currentUser;

    if (checkWin()) {
        displayWinner.style.display = "block";
        overlayDisplay.style.display = "flex";
        winner.textContent = `${currentUser} WON!`;
        return;
    }

    if (checkDraw()) {
        displayWinner.style.display = "block";
        overlayDisplay.style.display = "flex";
        winner.textContent = `DRAW`;
        return;
    }

    currentUser = currentUser === "X" ? "O" : "X";
    currentPlayerDisplay.textContent = `Current: ${currentUser}`;
}

function checkWin() {
    const flatBoard = arr.flat();

    for (const combo of winningCondition) {
        const [a, b, c] = combo;
        if (
            flatBoard[a] !== "" &&
            flatBoard[a] === flatBoard[b] &&
            flatBoard[a] === flatBoard[c]
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    const flatBoard = arr.flat();

    if (flatBoard.every((cell) => cell !== "") && !checkWin()) {
        return true;
    }

    return false;
}

function resetBoard() {
    for (let i = 0; i < ROW_COUNT; i++) {
        for (let j = 0; j < COL_COUNT; j++) {
            arr[i][j] = "";
        }
    }

    Array.from(board.children).forEach((cell) => {
        cell.textContent = "";
    });

    currentUser = "X";
    currentPlayerDisplay.textContent = `Current: ${currentUser}`;

    displayWinner.style.display = "none";
    overlayDisplay.style.display = "none";
}
