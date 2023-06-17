// Board representation
let board = ["", "", "", "", "", "", "", "", ""];

// Current player ("X" or "O")
let currentPlayer = "X";

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle a player's move
function handleClick(index) {
    // Check if the clicked cell is empty
    if (board[index] === "") {
        // Update the board with the current player's symbol
        board[index] = currentPlayer;

        // Update the cell's content on the HTML board
        document.getElementsByClassName("board")[0].children[index].innerHTML = currentPlayer;

        // Check if the current player wins
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + " wins!");
            resetBoard();
        } else if (board.every(cell => cell !== "")) {
            // Check if it's a tie
            alert("It's a tie!");
            resetBoard();
        } else {
            // Switch players
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Function to check if a player wins
function checkWin(player) {
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}



function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    let cells = document.getElementsByClassName("board")[0].children;
    for (let i = 0; i < cells.length; i++) {
       cells[i].innerHTML="";



    }
}