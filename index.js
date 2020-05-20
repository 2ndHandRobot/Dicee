function warmUp() {
  myVar = setInterval(rollNow, 400);
}

function rollNow() {
  roll1 = rollDice("player1");
  roll2 = rollDice("player2");
  return [roll1, roll2];
}

function playNow() {
  document.getElementById("snakes").style.visibility = "hidden";
  clearInterval(myVar);
  var rolls = rollNow();
  updateWinner(winnerIs(rolls[0], rolls[1]));
  console.log (rolls);
  if (rolls[0] == 1 && rolls[1] == 1) {
    document.getElementById("snakes").style.visibility = "visible";
  }
  document.getElementsByTagName("button")[0].innerText = "Click to play again!";
}

function rollDice(player) {
  var myRoll = Math.floor(Math.random() * 6) + 1
  stSrc = "images/dice" + myRoll + ".png"
  document.getElementById(player).src = stSrc;
  return myRoll;
}

function winnerIs(num1, num2) {
  var winner = 0;
  if (num1 > num2) {
    winner = 1
  } else if (num2 > num1) {
    winner = 2
  };
  return winner;
}

function updateWinner(winner) {
  var winText = "It's a draw!";
  var p1Text = "Player 1";
  var p2Text = "Player 2";

  if (winner === 1) {
    winText = "Player 1 wins!"
    p1Text = "🚩Player 1";
    p2Text = "Player 2";
  } else if (winner === 2) {
    winText = "Player 2 wins!"
    p1Text = "Player 1";
    p2Text = "Player 2 🚩";
  } else {};

  document.getElementById("result").innerText = winText;
  document.getElementById("player1Text").innerText = p1Text;
  document.getElementById("player2Text").innerText = p2Text;
}
