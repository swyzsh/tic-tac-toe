/*
Attempt at making "Terminal First" tic-tac-toe before building frontend

for the gameboard make a position object with cells 3x3
store gameboard as an array inside of Gameboard object

store players inside object as well - 2 players can only play this game

make an object to control the flow of the game itself

the way game works is gameboard needs to be changed with the new input and printed again in the console.

*/

function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

let turnP1 = false;
let turnP2 = false;

function Gameboard(p1_mark, p2_mark) {

  let gameboard = [
    ['[ ]', '[ ]', '[ ]'],
    ['[ ]', '[ ]', '[ ]'],
    ['[ ]', '[ ]', '[ ]']
  ]

  if (p1_mark === 'x' && p1_mark === 'X' && turnP1 == true) {

  } else if (p2_mark === 'x' && p2_mark === 'X' && turnP2 == true) {

  }

  return gameboard;
}

function controller() {
  const player1 = new Player('user', 'X');
  const player2 = new Player('bot', 'Y');
  
  let game = new Gameboard(player1.mark, player2.mark);
  
  console.log(game);  
}