const board = document.querySelector('#board');
let turn = 'X';

for (let i = 0; i < 9; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('click', function() {
    if (square.textContent === '') {
      square.textContent = turn;
      turn = (turn === 'X') ? 'O' : 'X';
    }
  });
  board.appendChild(square);
}