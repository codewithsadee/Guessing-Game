var gameBoard = {
  life: document.querySelector("#life"),
  point: document.querySelector("#point"),
  result: document.querySelector(".result"),
  keypadDisplay: document.querySelector(".numpad-display"),
  keypad1: document.querySelector("#keypad1"),
  keypad2: document.querySelector("#keypad2"),
  keypad3: document.querySelector("#keypad3"),
  keypad4: document.querySelector("#keypad4"),
  keypad5: document.querySelector("#keypad5"),
  keypadEnter: document.querySelector("#enter")
}

var lifeArray = []
for (var i = 0; i < 5; i++) {
  lifeArray.push("<i class=\"fas fa-heart\"></i>")
}
gameBoard.life.innerHTML = lifeArray;

var inputHistory = [];
var pointArray = [0];

function keypad(key) {
  gameBoard.keypadDisplay.innerHTML = key;
  inputHistory.push(key)
}

function Enter() {
  var random = Math.ceil(Math.random() * 5);

  if (inputHistory[inputHistory.length - 1] == random) {
    pointArray[0] += 5;
    gameBoard.result.innerHTML = "Right Guess <br> Point +5";
    gameBoard.point.innerHTML = pointArray[0];
  } else {
    lifeArray.pop();
    gameBoard.life.innerHTML = lifeArray;
    gameBoard.result.innerHTML = "Wrong Guess <br> Guess Number : " + random;

    if (lifeArray.length == 0) {
      gameBoard.result.innerHTML = "<span id=\"game-over\">Game Over</span><br><a href=\"\"><i class=\"fas fa-sync-alt\"></i></a>"
    }
  }
}