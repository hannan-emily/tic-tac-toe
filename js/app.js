console.log("javascript running");

//grab elements I need from DOM
//gets all the divs holding the backgrounds for tiles
var gameBoard = document.querySelectorAll("#gameboard > .box");

var turn = 0


//check for win after each click, see function above
checkWin();


//function to step 1. add turn counter +1 each time boxClick happens (each time we click)
//step 2. once a box is clicked, the function will count even turns (turn%2===0) & switch to one color, odd turns are the "else" condition
//since first move is odd, X's happen on odd turns
var boxClick = function() {
  turn++;
  if (turn%2 === 0){
    this.textContent= 'O';
    this.style.backgroundColor = 'red';
    checkWin();
  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
    checkWin();
  }
  //making sure boxClick function is working - also logs number of clicks to verify
  console.log("clicked!");
};


//setting all scenarios in which a win could happen
var checkWin = function() {

//i've set the gameboard at the top of the doccument. now, i'm pulling out each of the 9 squares, and assigning variable to each, so i can match below for win conditions
var sq1 = classes(gameBoard[0].firstElementChild.className);
var sq2 = classes(gameBoard[1].firstElementChild.className);
var sq3 = classes(gameBoard[2].firstElementChild.className);
var sq4 = classes(gameBoard[3].firstElementChild.className);
var sq5 = classes(gameBoard[4].firstElementChild.className);
var sq6 = classes(gameBoard[5].firstElementChild.className);
var sq7 = classes(gameBoard[6].firstElementChild.className);
var sq8 = classes(gameBoard[7].firstElementChild.className);
var sq9 = classes(gameBoard[8].firstElementChild.className);

while (turnCount >= 3) {
  if (
      //row1
      (sq1 === sq2 && sq2 === sq3)  ||
      //row 2
      (sq4 === sq5 && sq5 === sq6)  ||
      //row 3
      (sq7 === sq8 && sq8 === sq9)  ||
      //col 1
      (sq1 === sq4 && sq4 === sq7)  ||
      //col 2
      (sq2 === sq5 && sq5 === sq8)  ||
      //col 3
      (sq3 === sq6 && sq6 === sq9)  ||
      //diag 1
      (sq1 === sq5 && sq5 === sq9)  ||
      //diag 2
      (sq3 === sq5 && sq5=== sq7)
    ) {
      console.log("we have a winner!");
      if (turn%2 === 0) {
        winner = 'O'
      } else {
        winner = 'X'
      }
    }

    else {
  }
};


// add event listener for all 9 boxes to be clicked. using loop for the class boxes
var addBoxClickListener = function() {
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
};

document.addEventListener("DOMContentLoaded", function() {
    addBoxClickListener();
});
