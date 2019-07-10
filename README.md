# Pig Dice

#### Write a program where two users can play Pig dice against each other.

#### By  Carrie Schmid & Craig Hutler

## Description

Each turn, a player repeatedly rolls a dice until either a 1 is rolled or the player decides to "hold":

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

## Behavioral Specifications

| Behavior | Input | Outcome |
|----------|-------|---------|
| Player 1 clicks ROLL button   | Click ROLL button | Random number between 1 and 6 is generated |
| If Player 1 rolls any number other than 1 that number is added to the round total | Roll = 3 | Round Total = 3|
| If Player 1 rolls a 1, the round score is 0, and their turn ends | Roll = 1 | Round = 0 |
| Player Two begins, if they roll any number other than 1 the number is added to the round total | Roll = 5 | Round Total = 5 |
| Player Two can continue to roll until they decide to hold at which point their round total is added to previous round totals and their turn ends | Player Two clicks Hold | Round Total = 5 and turn ends |
| When one player's score is => 100 that player wins | Player Two Score = 102 and Player One Score = 65 | Player Two wins the game |


## Setup/Installation Requirements

Copy the files and drectory structure to your own webserver or local drive.

## Known Bugs

Many. This is a work in progress.

## Support and contact details

No support is provided for this project. It is a test excercise for the Epicodus Intro to Programming class. Additional details and supporting lessons can be found on the [Learn How To Program](https://www.learnhowtoprogram.com/intro-to-programming-evening/object-oriented-javascript-24d4886d-eb63-4a1e-8eae-17d4a2641256/game-of-choice-two-day-project) website. 


## Technologies Used

HTML, CSS (Bootstrap), JavaScript and jQuery

### Released under MIT License 2019
