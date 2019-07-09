// Biz in the back



function diceRoll() {
  var randomRoll = Math.floor(Math.random() * 6) +1;
  document.getElementById("roll").innerHTML = randomRoll
}

// Interface in the front

// $("#dice").click(function() {
//   console.log(Math.floor(Math.random() * 6) +1);
// });

$("#dice").click(function() {
  console.log(random);
});
