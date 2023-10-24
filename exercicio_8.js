
var board = document.getElementById('board');
var message = document.getElementById('message');

let jogadorAtual = 'X';
let cells = Array(9).fill('');
let gameover = false;

for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList('cell');
    cell.addEventListener('click', () => handleCellClick(i));
    board.appendChild(cell);
}

function handleCellClick (index);