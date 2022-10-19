
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const winLose = document.createElement('div');

let player = 0;
let computer = 0;

rock.addEventListener('click', () => {
    game(playRound('rock'));
    score();
    final();
});
paper.addEventListener('click', () => {
    game(playRound('paper'));
    score();
    final();
});
scissors.addEventListener('click', () => {
    game(playRound('scissors'));
    score();
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

//Keep track of wins/losses
function game(round){
    if (round === 'win') {
        player += 1;
    }else if (round === 'lose') {
        computer += 1;
    }
}    

//Display score
function score(){
    playerScore.textContent = player;
    computerScore.textContent = computer;

}

//Check in there is a winner
function final(){    
    console.log(player);
    if (player === 5 ) {
        console.log("You Win!");
        player = 0;
        computer = 0;
        score();
    }else if (computer === 5){
        console.log("You Lose!")
        player = 0;
        computer = 0;
        score();
    }
}