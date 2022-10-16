
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let player = 0;
let computer = 0;

rock.addEventListener('click', () => {
    game(playRound('rock'));
    final();
});
paper.addEventListener('click', () => {
    game(playRound('paper'));
    final();
});
scissors.addEventListener('click', () => {
    game(playRound('scissors'));
    final();
});



/* prompt user for choice and store it
function playerChoice() {
    player = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    if (player === 'paper' || player === 'rock' || player === 'scissors') {
        return player
    }else{playerChoice()}
}*/

// get computers random choice
function computerChoice() {
    let compChoice;
    let rndInt = Math.floor(Math.random() * 3);
    if (rndInt === 0) {
        return compChoice = 'rock';
    }else if (rndInt === 1) {
        return compChoice = 'paper';
    }else {
        return compChoice = 'scissors'
    }
}

// compare values
function compare(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie");
        return "Tie";
    }else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("Win");
            return "win";
        }else {
            console.log("Lose");
            return "lose"
        }
    }else if(playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("Win");
            return "win";
        }else {
            console.log("Lose");
            return "lose"
        }
    }else{
        if (computerSelection === 'paper') {
            console.log("Win");
            return "win";
        }else {
            console.log("Lose");
            return "lose"
        }
    }
}

//Play the game once
function playRound(playerChoice){
    return compare(computerChoice(), playerChoice);
}

//Play 5 round game, keep track of wins/losses
function game(round){
    if (round === 'win') {
        player += 1;
    }else if (round === 'lose') {
        computer += 1;
    }
}    
//Check in there is a winner
function final(){    
    console.log(player);
    if (player === 5 ) {
        console.log("You Win!");
    }else if (computer === 5){
        console.log("You Lose!")
    }
}