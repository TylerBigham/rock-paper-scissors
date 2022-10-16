
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissors.addEventListener('click', () => {
    playRound('scissors');
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

/*Play 5 round game, keep track of wins/losses
function game(){
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound();
        if (round === 'win') {
            player += 1;
        }else if (round === 'lose') {
            computer += 1;
        }else {i -= 1}
    }
    if (player > computer) {
        return "You Win!";
    }else {return "You Lose!"}
}*/