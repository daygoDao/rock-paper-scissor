let playerSelected = 'n/a';

const warrior = document.getElementById('warrior')
warrior.addEventListener('click', chosenWarrior);
const mage = document.getElementById('mage')
mage.addEventListener('click', chosenMage);
const archer = document.getElementById('archer')
archer.addEventListener('click', chosenArcher);

function chosenWarrior(e) {
	document.querySelector('#warrior').style.background = 'blue';
	playerSelected = 'warrior';
	return 'warrior';
}

function chosenMage() {
	document.querySelector('#mage').style.background = 'blue';
}

function chosenArcher() {
	document.querySelector('#archer').style.background = 'blue';
}

/*
 ** playerChoice() will get the users selection and return warrior, mage, or archer
 **
 ** arg(s):      none
 ** return(s):   string type fighter; ex. 'warrior'
 */
function playerChoice() {
	//get user input
	let choice = prompt('choose warrior, mage, or archer', '').toLowerCase();
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
	let fighters = ['warrior', 'mage', 'archer'];
	let computerChoice = Math.floor(Math.random() * 3);
	console.log(fighters[computerChoice]);
	return fighters[computerChoice];
}

/*
 ** playRound() will call the helper function battle() returns the winner.
 ** 
 **
 ** arg(s):      none
 ** return(s):   none
 */
function playRound() {
	let fighter1 = playerChoice();
	let fighter2 = computerChoice();
	console.log(`player 1 fighter is ${fighter1}`)
	console.log(`player 2 fighter is ${fighter2}`)
	//    console.log(battle(fighter1, fighter2));
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
	} else if (fighter1 === 'warrior' && fighter2 === 'archer') {
		console.log("player 1's warrior murders the archer with the swing of his axe");
		winner = 1;
	} else if (fighter1 === 'archer' && fighter2 === 'mage') {
		console.log("player 1's archer launches an arrow into the mage's skull");
		winner = 1;
	} else if (fighter1 === 'mage' && fighter2 === 'warrior') {
		console.log("player 1's mage renders the warrior frozen to death with his magical blizzard");
		winner = 1;
	} else if (fighter2 === 'warrior' && fighter1 === 'archer') {
		console.log("computer's warrior murders the archer with the swing of his axe");
		winner = 2;
	} else if (fighter2 === 'archer' && fighter1 === 'mage') {
		console.log("computer's archer launches an arrow into the mage's skull");
		winner = 2;
	} else if (fighter2 === 'mage' && fighter1 === 'warrior') {
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