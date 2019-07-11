// Biz in the back
var isPlayer1Turn = true

//Player Object
function Player() {
  this.diceRoll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
}

Player.prototype.Roll = function() {
  this.diceRoll = Math.floor(Math.random() * 6) +1;
  if (this.diceRoll === 1) {
    this.turnScore = 0;
    isPlayer1Turn = !isPlayer1Turn
  } else {
    this.turnScore += this.diceRoll;
  }
};

Player.prototype.Hold = function() {
  this.totalScore += this.turnScore;
  if (this.totalScore >= 10) {
    winner = isPlayer1Turn ? 'Player 1' : 'Player2';
    alert(winner + 'wins!');
  } else {
    this.turnScore = 0;
    isPlayer1Turn = !isPlayer1Turn;
  }
};

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

// Interface in the front

$(document).ready(function() {

  var player1 = new Player();
  var player2 = new Player();

  $('player1-total-score').text(0);
  $('player2-total-score').text(0);

  $('button#player-roll').click(function() {
    if (isPlayer1Turn) {
      player1.diceRoll();
      $('#roll').text(player1.currentRoll);
      $('#round1').text(player1.turnScore);
    } else {
      player2.diceRoll();
      $('#roll').text(player2.currentRoll);
      $('#round2').text(player2.turnScore);
    }
  });

  $('button#player-hold').click(function() {
    if (isPlayer1Turn) {
      player1.hold();
      $('#roll').text('');
      $('#round1').text('');
      $("#score1").text(player1.totalscore);
    } else {
      player2.hold();
      $('#roll').text('');
      $('#round2').text('');
      $("#score2").text(player2.totalscore);
    }
  });
  
  $('button#reset').click(function() {
    location.reload();
  });

});