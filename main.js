let playerSelected = 'n/a';

document.getElementById('warrior').addEventListener('click', chosenWarrior);
document.getElementById('mage').addEventListener('click', chosenMage);
document.getElementById('archer').addEventListener('click', chosenArcher);

function chosenWarrior() {
    document.querySelector('#warrior').style.background = 'blue';
    playerSelected = 'warrior';
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

/*
 ** playRound(fighter1, fighter2) take the computer and players selection and
 ** determine the winner of the round.
 **
 ** arg(s):      strings type 'fighter1' & 'fighter2'
 ** return(s):   number type 'winner'; number 1 correlate to the player while 
 **              number 2 will represent the computer
 */

/*
 ** game() will loop through and keep track of the score and will end once the
 ** first one to 5 wins is determined.
 **
 ** arg(s):      none
 ** return(s):   none
 */