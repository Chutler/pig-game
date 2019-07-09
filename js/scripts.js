// Biz in the back



function diceRoll() {
  var randomRoll = Math.floor(Math.random() * 6) +1;
  document.getElementById("roll1").innerHTML = randomRoll;
  turnResult(randomRoll);
}

var playerOne = []
var playerTwo = []

function turnResult(randomRoll) {
  if (randomRoll > 1) {
    playerOne.push(randomRoll);
  } else {
    print("End of turn"); // wrong print method
    console.log(playerOne); // return sum of array to a 3rd div
    $('#playerOneButton').hide();
    $('#playerTwoButton').show();
    // function turnResult2();
  }
}

function turnResult2(randomRoll) {
  if (randomRoll > 1) {
    playerTwo.push(randomRoll);
  } else {
    print("End of turn"); // wrong print method
    console.log(playerOne);
  }
}

// Interface in the front

// $("#dice").click(function() {
//   console.log(Math.floor(Math.random() * 6) +1);
// });
