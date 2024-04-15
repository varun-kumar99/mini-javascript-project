let currentPlayer = 'cross';
let crossPositions = [];
let circlePositions = [];
const board = document.getElementById('board').children;

// Define winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

function makeMove(cellIndex) {
    const cell = board[cellIndex];
    if (!cell.innerText) {
        // Push the cell index to the respective positions array
        if (currentPlayer === 'cross') {
            crossPositions.push(cellIndex);
            if (crossPositions.length === 4) {
                removeFirst('X');
            }
        } else {
            circlePositions.push(cellIndex);
            if (circlePositions.length === 4) {
                removeFirst('O');
            }
        }

        // Update the cell with the current player's mark
        cell.innerText = currentPlayer === 'cross' ? 'X' : 'O';

        // Check for a winner after updating the board
        const positions = currentPlayer === 'cross' ? crossPositions : circlePositions;
        if (checkWinner(positions)) {
            const winner = currentPlayer === 'cross' ? 'Cross' : 'Circle';
            showModal(`${winner} wins!`); // Display winning popup
            resetGame(); // Reset the game
            return;
        }

        // Toggle player after checking for winner
        currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross';
    }
}

function checkWinner(positions) {
    for (const combination of winningCombinations) {
        if (combination.every(pos => positions.includes(pos))) {
            return true;
        }
    }
    return false;
}

function removeFirst(symbol) {
    let positions;
    if (symbol === 'X') {
        positions = crossPositions;
    } else {
        positions = circlePositions;
    }
    const firstPosition = positions.shift();
    board[firstPosition].innerText = '';
}

function resetGame() {
    for (let i = 0; i < board.length; i++) {
        board[i].innerText = '';
    }
    currentPlayer = 'cross';
    crossPositions = [];
    circlePositions = [];
}
function showModal(message) {
    const modal = document.getElementById('winning-popup');
    const winnerMessage = document.getElementById('winner-message');
    winnerMessage.textContent = message;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('winning-popup');
    modal.style.display = 'none';
}