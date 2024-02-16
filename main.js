console.log("welcome to the deathmatch!");
let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector(".playerScoreboard");
let npcScoreboard = document.querySelector(".computerScoreboard");
let roundResult = document.querySelector(".roundResult");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const restart = document.querySelector(".reset");

/*
 ** playerChoice() will get the users selection and return warrior, mage, or archer
 **
 ** arg(s):      none
 ** return(s):   string type fighter; ex. 'rock'
 */
function playerChoice(e) {
  let choice = e.target.value;
  return choice;
}

/*
 ** computerChoice() will randomly generate a number to pick and return 1 of the 3 options
 **
 ** arg(s):      none
 ** return(s):   string type figher; ex. 'paper'
 */
function computerChoice() {
  let fighters = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * 3);
  //console.log(fighters[computerChoice]);
  return fighters[computerChoice];
}

/*
 ** playRound() will call the helper function battle() returns the winner.
 **
 **
 ** arg(s):      none
 ** return(s):   none
 */
function playRound(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    alert("Play a new game by pressing the Start Over button.");
  } else {
    let fighter1 = playerChoice(e);
    let fighter2 = computerChoice();

    document
      .querySelector(".fighter1")
      .setAttribute(
        "style",
        `background-image: url("./images/${fighter1}.jpg")`
      );
    document
      .querySelector(".fighter2")
      .setAttribute(
        "style",
        `background-image: url("./images/${fighter2}.jpg")`
      );

    let winner = battle(fighter1, fighter2);

    if (winner === 1) {
      playerScore++;
      playerScoreboard.textContent = playerScore;
    }
    if (winner === 2) {
      computerScore++;
      npcScoreboard.textContent = computerScore;
    }

    console.log(`player:${playerScore}; computer:${computerScore}`);

    checkWinner(winner);
  }
}

/*
 ** battle(fighter1, fighter2) take the computer and players selection as
 ** arguments and determines the winner of the round.
 ** Warrior > Archer
 ** Archer > Mage
 ** Mage > Warrior
 **
 ** arg(s):      strings type 'fighter1' & 'fighter2'
 ** return(s):   number type 'winner'; number 1 correlate to the player while
 **              number 2 will represent the computer
 */
function battle(fighter1, fighter2) {
  let winner = 0;
  if (fighter1 === fighter2) {
    roundResult.textContent = "tie";
  } else if (fighter1 === "rock" && fighter2 === "scissor") {
    roundResult.textContent = "player 1's rock smashes the flimsy scisssor";
    winner = 1;
  } else if (fighter1 === "scissor" && fighter2 === "paper") {
    roundResult.textContent = "player 1's scissor rips the paper to shreds";
    winner = 1;
  } else if (fighter1 === "paper" && fighter2 === "rock") {
    roundResult.textContent =
      "player 1's paper wraps the rock and crushes it to pebbles";
    winner = 1;
  } else if (fighter2 === "rock" && fighter1 === "scissor") {
    roundResult.textContent = "computer's rock smashes the flimsy scisssor";
    winner = 2;
  } else if (fighter2 === "scissor" && fighter1 === "paper") {
    roundResult.textContent = "computer's scissor rips the paper to shreds";
    winner = 2;
  } else if (fighter2 === "paper" && fighter1 === "rock") {
    roundResult.textContent =
      "computer's paper wraps the rock and crushes it to pebbles";
    winner = 2;
  }
  return winner;
}

/*
 ** checkWinner() will see if someone is first to 5 wins
 **
 ** arg(s):      number type 'winner'; 0 is a tie, 1 will be the user, 2 will be the computer
 ** return(s):   none
 */
//this function will check if game is over with the first one to 5 wins
function checkWinner(winner) {
  if (playerScore === 5 || computerScore === 5) {
    roundResult.textContent = `The winner is ${
      winner == 1 ? "Human" : "Computer"
    }`;
  }
}

/*
 ** checkWinner() will see if someone is first to 5 wins
 **
 ** arg(s):      number type 'winner'; 0 is a tie, 1 will be the user, 2 will be the computer
 ** return(s):   none
 */
//this function will check if game is over with the first one to 5 wins
function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScoreboard.textContent = playerScore;
  npcScoreboard.textContent = computerScore;
  roundResult.textContent = "WHO SHALL BE THE VICTOR?!";
}

scissor.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
rock.addEventListener("click", playRound);
restart.addEventListener("click", reset);
