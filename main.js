let playerSelected = 'n/a';

const rock = document.getElementById('rock')
rock.addEventListener('click', playRound);
const paper = document.getElementById('paper')
paper.addEventListener('click', playRound);
const scissor = document.getElementById('scissor')
scissor.addEventListener('click', playRound);

/*
 ** playerChoice() will get the users selection and return warrior, mage, or archer
 **
 ** arg(s):      none
 ** return(s):   string type fighter; ex. 'warrior'
 */
function playerChoice(e) {
	//get user input
	let choice = e.target.value;

	//return string value
	return choice;
}

/*
 ** computerChoice() will randomly generate a number to pick and return 1 of the 3 options
 **
 ** arg(s):      none
 ** return(s):   string type figher; ex. 'mage'
 */
function computerChoice() {
	let fighters = ['rock', 'paper', 'scissor'];
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
	let fighter1 = playerChoice(e);
	let fighter2 = computerChoice();
	console.log(`player 1 fighter is ${fighter1}`)
	console.log(`player 2 fighter is ${fighter2}`)
	return battle(fighter1, fighter2);
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
		console.log('tie');
	} else if (fighter1 === 'rock' && fighter2 === 'scissor') {
		console.log("player 1's warrior murders the archer with the swing of his axe");
		winner = 1;
	} else if (fighter1 === 'scissor' && fighter2 === 'paper') {
		console.log("player 1's ninja throws down a smoke bomb and throws a kunai into the mage's skull");
		winner = 1;
	} else if (fighter1 === 'paper' && fighter2 === 'rock') {
		console.log("player 1's mage renders the warrior frozen to death with his magical blizzard");
		winner = 1;
	} else if (fighter2 === 'rock' && fighter1 === 'scissor') {
		console.log("computer's warrior murders the archer with the swing of his axe");
		winner = 2;
	} else if (fighter2 === 'scissor' && fighter1 === 'paper') {
		console.log("computer's ninja sneaks through the shadows and backstabs the mage");
		winner = 2;
	} else if (fighter2 === 'paper' && fighter1 === 'rock') {
		console.log("computer's mage renders the warrior frozen to death with his magical blizzard");
		winner = 2;
	}
	return winner;
}

/*
 ** game() will loop through and keep track of the score and will end once the
 ** first one to 5 wins is determined.
 **
 ** arg(s):      none
 ** return(s):   none
 */
function game() {
	let exitGame = false;
	let playerScore = 0;
	let computerScore = 0;
	while (!exitGame) {
		let winner = playRound();
		console.log(winner);
		if (winner === 1) {
			playerScore++;
		}
		if (winner === 2) {
			computerScore++;
		}
		if (playerScore === 5 || computerScore === 5) {
			exitGame = true;
		}
		console.log(`current score is player:${playerScore} - computer:${computerScore}`);
	}
}