//* DOM selection //
var gameBoard = {
  life: document.querySelector("#life"),
  point: document.querySelector("#point"),
  pointAnim: document.querySelector("#point-anim"),
  result: document.querySelector(".result"),
  keypadDisplay: document.querySelector(".numpad-display"),
  numpadBox: document.querySelector(".numpad-box"),
  keypad1: document.querySelector("#keypad1"),
  keypad2: document.querySelector("#keypad2"),
  keypad3: document.querySelector("#keypad3"),
  keypad4: document.querySelector("#keypad4"),
  keypad5: document.querySelector("#keypad5"),
  keypadEnter: document.querySelector("#enter")
}

//* Gameborad life create //
var lifeArray = [];
for (var i = 0; i < 5; i++) {
  lifeArray.push("<i class=\"fas fa-heart\"></i>");
}

gameBoard.life.innerHTML = lifeArray; //* printing gameBoard life //

var inputHistory = []; //* total guess history //
var pointArray = [0]; //* gameBoard point array //

//! The keypad funtion --> defined the number what user clicked //
function keypad(key) {
  gameBoard.keypadDisplay.innerHTML = key; //* display user selected number
  inputHistory.push(key) //* pushing selected number in inputHistory
}

//! GAME BOARD MAIN FUNCTION //
function Enter() {
  var random = Math.ceil(Math.random() * 5); //* genarate a random number within 1-5

  //* if condition is true player earn 5 points
  if (inputHistory[inputHistory.length - 1] == random) {
    pointArray[0] += 5;

    gameBoard.pointAnim.innerHTML = "<span>+5</span>"
    gameBoard.result.innerHTML = "Right Guess"; //* print result box message

    //! Win Condition --> if player point reached 30 player will be win
    if (pointArray[0] >= 30) {
      gameBoard.result.innerHTML = "<span id=\"game-win\">Congratulation<br>You Win!</span><br><a href=\"\"><i class=\"fas fa-sync-alt\"></i></a>"
      gameBoard.numpadBox.innerHTML += "<div class=\"button-disable\"></div>"
    } else {
      //* Gameborad life reset  //
      if (lifeArray.length < 5) {
        lifeArray = []; //* re-assign array in lifeArray
        for (var x = 0; x < 5; x++) {
          lifeArray.push("<i class=\"fas fa-heart\"></i>");
        }
      }
    }

    gameBoard.point.innerHTML = pointArray[0]; //* print point
    gameBoard.life.innerHTML = lifeArray; //* print life

  } else {
    lifeArray.pop(); //* poping array for reducing player life

    gameBoard.life.innerHTML = lifeArray; //* print life
    gameBoard.result.innerHTML = "Guess Number " + random; //* print guess nummber

    //! GAME OVER CONDITION
    if (lifeArray.length < 1) {
      gameBoard.result.innerHTML += "<br><span id=\"game-over\">Game Over</span><br><a href=\"\"><i class=\"fas fa-sync-alt\"></i></a>"
      gameBoard.numpadBox.innerHTML += "<div class=\"button-disable\"></div>"
    }
  }
}