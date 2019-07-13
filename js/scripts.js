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

// Need to create funtion to check active player and show that players buttons while hiding inactive

// Monday's functions for each Player 1 turn
// holding on this for nostalgic reasons 

// function turnResult(randomRoll) {
//   if (randomRoll > 1) {
//     playerOne.push(randomRoll);
//   } else {
//     alert("End of turn"); // wrong print method
//     console.log(playerOne); // return sum of array to a 3rd div
//     $('#playerOneButton').hide();
//     $('#playerTwoButton').show();
//     // function turnResult2();
//   }



// Interface in the front

$(document).ready(function() {
  debugger;
  $(":button").click(function() {
    var player1 = new Player();
    var player2 = new Player(); 
    debugger;
  });
  // Using any button click to create the new objects to start the game.  
  // However the vars appear to be local an unavailable outside of the function.
  // Not sure how to create var to create object this way and be global...

  $('#score1').text(0);
  $('#score2').text(0);
  // $('#roll').text(5); // test value for styling

  $('button#player-roll').click(function() {
    if (isPlayer1Turn) {
      player1.diceRoll();
      $('#roll').text(player1.diceRoll);
      $('#round1').text(player1.turnScore);
    } else {
      player2.diceRoll();
      $('#roll').text(player2.diceRoll);
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