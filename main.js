console.log('welcome to the deathmatch!');
let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector('.playerScoreboard');
let npcScoreboard = document.querySelector('.computerScoreboard');
let roundResult = document.querySelector('.roundResult');

const rock = document.querySelector('.rock')
rock.addEventListener('click', playRound);
const paper = document.querySelector('.paper')
paper.addEventListener('click', playRound);
const scissor = document.querySelector('.scissor')
scissor.addEventListener('click', playRound);

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

	document.querySelector('.fighter1').setAttribute('style', `background-image: url("./images/${fighter1}.jpg"); background-size: 150%; background-repeat: no-repeat; background-position: center;`)

	document.querySelector('.fighter2').setAttribute('style', `background-image: url("./images/${fighter2}.jpg"); background-size: 150%; background-repeat: no-repeat; background-position: center;`)

	let winner = battle(fighter1, fighter2);

	console.log(winner);
	if (winner === 1) {
		playerScore++;
		playerScoreboard.textContent = playerScore;
	}
	if (winner === 2) {
		computerScore++;
		npcScoreboard.textContent = computerScore;
	}

	checkWinner(winner);
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
		roundResult.textContent = 'tie';
	} else if (fighter1 === 'rock' && fighter2 === 'scissor') {
		roundResult.textContent = "player 1's warrior murders the archer with the swing of his axe";
		winner = 1;
	} else if (fighter1 === 'scissor' && fighter2 === 'paper') {
		roundResult.textContent = "player 1's ninja throws down a smoke bomb and throws a kunai into the mage's skull";
		winner = 1;
	} else if (fighter1 === 'paper' && fighter2 === 'rock') {
		roundResult.textContent = "player 1's mage renders the warrior frozen to death with his magical blizzard";
		winner = 1;
	} else if (fighter2 === 'rock' && fighter1 === 'scissor') {
		roundResult.textContent = "computer's warrior murders the archer with the swing of his axe";
		winner = 2;
	} else if (fighter2 === 'scissor' && fighter1 === 'paper') {
		roundResult.textContent = "computer's ninja sneaks through the shadows and backstabs the mage";
		winner = 2;
	} else if (fighter2 === 'paper' && fighter1 === 'rock') {
		roundResult.textContent = "computer's mage renders the warrior frozen to death with his magical blizzard";
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
		alert(`the winner is ${winner}. but for how long?`);
		//reset score to 0
		playerScore = 0;
		computerScore = 0;
		playerScoreboard.textContent = playerScore;
		npcScoreboard.textContent = computerScore;
		roundResult.textContent = 'WHO SHALL BE THE VICTOR?!'

	}
}