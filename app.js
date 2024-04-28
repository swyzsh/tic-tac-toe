function Gameboard() {
  this.cells = document.querySelectorAll("#gameboard .cell");
  this.currentPlayer = null;
  this.player1 = null;
  this.player2 = null;
  this.turn = 0;

  this.updateStatus = function() {
    this.statusTurn = document.querySelector(".status .regular");
    this.statusRemark = document.querySelector(".status .italic");
    this.statusTurn.textContent = `PLAYER ${this.currentPlayer === this.player1 ? `1` : `2`}`;
    this.statusRemark.textContent = `${this.currentPlayer.mark === this.player1.mark ? this.player1.mark : this.player2.mark}, it's your turn...`;
  }

  this.checkWin = function(mark) {
    const winningCombination = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombination.some(combination => {
      return combination.every(index => {
        return this.cells[index].textContent === mark;
      });
    });
  };

  this.updateStatusWin = function(player) {
    this.statusTurn.textContent = `PLAYER ${player === this.player1 ? `1` : `2`}`;
    this.statusRemark.textContent = `You won!!!`;
  };

  this.initialize = function(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.updateStatus();
    this.cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!cell.textContent) {
          cell.textContent = this.currentPlayer.mark;
          
          if (this.currentPlayer === this.player1) {
            cell.classList.add("player1-mark");
          } else if (this.currentPlayer === this.player2) {
            cell.classList.add("player2-mark");
          }

          // check for a win after each move
          if (this.checkWin(this.currentPlayer.mark)) {
            this.updateStatusWin(this.currentPlayer);
            // disable further moves after a win
            this.cells.forEach(cell => {
              cell.removeEventListener('click', arguments.callee);
            });
          } else {
            this.turn++;
            this.currentPlayer = this.turn % 2 === 0 ? this.player1 : this.player2;
            this.updateStatus();
          }
        }
      });
    });
  };
}

document.addEventListener('DOMContentLoaded', function() {
  function Player(name, mark) {
    this.name = name;
    this.mark = mark;
  }

  let player1, player2;
  let game = new Gameboard();
  
  function toggleButtons(selectedBtn, otherBtn) {
    selectedBtn.classList.add("button-selected");
    selectedBtn.disabled = false;
    otherBtn.classList.remove("button-selected");
    otherBtn.classList.add("disabled");
    otherBtn.disabled = true;
  }
  
  function controller() {
    const markXbtn = document.getElementById("mark-x");
    const markYbtn = document.getElementById("mark-o");
    const statusTurn = document.querySelector(".status .regular");
    const statusRemark = document.querySelector(".status .italic");

    function updateInitialStatus() {
      statusTurn.textContent = `PLAYER 1`;
      statusRemark.textContent = `it's your turn...`;
    }
    
    markXbtn.addEventListener('click', function() {
      toggleButtons(markXbtn, markYbtn);
      player1 = new Player('User', 'X');
      player2 = new Player('Bot', 'O');
      game.initialize(player1, player2);
      updateInitialStatus();
    });
    markYbtn.addEventListener('click', function() {
      toggleButtons(markYbtn, markXbtn);
      player1 = new Player('User', 'O');
      player2 = new Player('Bot', 'X');
      game.initialize(player1, player2);
      updateInitialStatus();
    });
  }
  controller();
});