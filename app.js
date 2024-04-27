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

  const cell0 = (document.querySelector(".index0")).textContent;
  const cell1 = (document.querySelector(".index1")).textContent;
  const cell2 = (document.querySelector(".index2")).textContent;
  const cell3 = (document.querySelector(".index3")).textContent;
  const cell4 = (document.querySelector(".index4")).textContent;
  const cell5 = (document.querySelector(".index5")).textContent;
  const cell6 = (document.querySelector(".index6")).textContent;
  const cell7 = (document.querySelector(".index7")).textContent;
  const cell8 = (document.querySelector(".index8")).textContent;

  let gameboard = [
    [cell0, cell1, cell2],
    [cell3, cell4, cell5],
    [cell6, cell7, cell8]
  ]

  if (p1_mark === 'x' && p1_mark === 'X' && turnP1 == true) {

  } else if (p2_mark === 'x' && p2_mark === 'X' && turnP2 == true) {

  }

  return gameboard;
}

function controller() {
  // handle player's mark choice
  const markXbtn = document.getElementById("mark-x");
  const markYbtn = document.getElementById("mark-o");

  let initialMark = markXbtn;
  let player1;
  let player2;
  let game;

  if (initialMark == markXbtn) {
    player1 = new Player('user', 'X');
    player2 = new Player('bot', 'Y');
    game = new Gameboard(player1.mark, player2.mark);

    console.log(game);

  } else if (initialMark == markYbtn) {
    player1 = new Player('user', 'Y');
    player2 = new Player('bot', 'X');
    game = new Gameboard(player1.mark, player2.mark);

    console.log(game);

  }
}

controller();