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
    winner = isPlayer1Turn ? ' PLAYER 1' : ' PLAYER 2';
    alert(winner + ' WINS!');
    location.reload();
  } else {
    this.turnScore = 0;
    isPlayer1Turn = !isPlayer1Turn;
  }
};

Player.prototype.Turn = function() {
  if (isPlayer1Turn = !isPlayer1Turn) {
    $('#playerOneButton').hide();
    $('#playerTwoButton').show();
  } else {
    $('#playerOneButton').show();
    $('#playerTwoButton').hide();
  }
}

// Need to create funtion to check active player and show that players buttons while hiding inactive

// Monday's functions for each Player 1 turn
// holding on this for nostalgic reasons 

// function turnResult(randomRoll) {
//   if (randomRoll > 1) {
//     playerOne.push(randomRoll);
//   } else {
//     alert("End of turn"); 
//     console.log(playerOne); // return sum of array to a 3rd div
//     $('#playerOneButton').hide();
//     $('#playerTwoButton').show();
//     // function turnResult2();
//   }



// Interface in the front

$(document).ready(function() {
  $(":button").click(function() {
    // Using any button click to create the new objects to start the game. 
    // Likely user clicks Player1 Roll btn
  });

  var player1 = new Player();
  var player2 = new Player(); 
  debugger;

  $('#score1').text(0);
  $('#score2').text(0);

  $('button#player-roll').click(function() {
    if (isPlayer1Turn) {
      player1.Roll();
      $('#roll').text(player1.diceRoll);
      $('#round1').text(player1.turnScore);
    } else {
      player2.Roll();
      $('#roll').text(player2.diceRoll);
      $('#round2').text(player2.turnScore);
    }
  });


  $('button#player-hold').click(function() {
    if (isPlayer1Turn) {
      player1.Hold();
      $('#roll').text('');
      $('#round1').text('');
      $("#score1").text(player1.totalScore);
    } else {
      player2.Hold();
      $('#roll').text('');
      $('#round2').text('');
      $("#score2").text(player2.totalScore);
    }
  });
  
  $('button#reset').click(function() {
    location.reload();
  });

});