// Biz in the back

  // function for rolling the dice
  function diceRoll() {
    var randomRoll = Math.floor(Math.random() * 6) +1;
    document.getElementById("roll").innerHTML = randomRoll; // To display roll in center column
    turnResult(randomRoll); // need to pass this to either player...
  }

// set up variables to hold total score ?
var playerOne = [] // I don't think an array is the best way to handle this
var playerTwo = [] // probably just empty variables to hold the total?

  // function for a player turn
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName; // capture and use actual names?
}

  // Prototype for rolling a 1 
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("You rolled a 1! Your turn is over!")
  // function to change the player? 
  } else {
  this.tempscore += this.roll;
  }
}

  // Prototype for a hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // function to change the player?
  alert("Turn over - next player...");
}

  // Monday's functions for each Player 1 turn
function turnResult(randomRoll) {
  if (randomRoll > 1) {
    playerOne.push(randomRoll);
  } else {
    alert("End of turn"); // wrong print method
    console.log(playerOne); // return sum of array to a 3rd div
    $('#playerOneButton').hide();
    $('#playerTwoButton').show();
    // function turnResult2();
  }
}
  // Monday's functions for each Player 2 turn
function turnResult2(randomRoll) {
  if (randomRoll > 1) {
    playerTwo.push(randomRoll);
  } else {
    alert("End of turn"); // wrong print method
    $('#playerTwoButton').hide();
    $('#playerOneButton').show();
    console.log(playerTwo);
  }
}

// Interface in the front

$(document).ready(function() {

  $("button#player1-roll").click(function(event){
    player1.roll = diceRoll();
    $("#roll").text(player1.roll);
    player1.rollone();
    $("#round1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = diceRoll();
    $("#roll").text(player2.roll);
    player2.rollone();
    $("#round2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#score1").text(player1.totalscore);
    $("#round1").empty();
    $("#roll").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#score2").text(player2.totalscore);
    $("#round2").empty();
    $("#roll").empty();
    player2.winnerCheck();
  });

});