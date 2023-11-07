
const board = document.getElementById('board');
const message = document.querySelector('.message');

let jogadorAtual = 'X'; 
let cells = Array(9).fill(''); 
let gameover = false; 

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell'); 
    cell.addEventListener('click', () => handleCellClick(i)); 
    board.appendChild(cell); 
}

function handleCellClick(index) {
    if (gameover || cells[index] !== '') return; 

    cells[index] = jogadorAtual; 
    board.children[index].innerHTML = `<i class="fas ${jogadorAtual === 'X' ? 'fa-times' : 'fa-dot-circle'}"></i>`;

    if (checkWinner()) { 
        gameover = true; 
        message.textContent = `Jogador ${jogadorAtual} venceu!`; 
    } else if (cells.every(cell => cell !== '')) { 
        gameover = true; 
        message.textContent = 'Empate!'; 
    } else {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; 
        message.textContent = `Vez do Jogador ${jogadorAtual}`; 
    }
}


function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a] !== '' && cells[a] === cells[b] && cells[b] === cells[c]) {
            return true; 
        }
    }

    return false; 
}