
// prompt user for choice and store it
function playerChoice() {
    return prompt("Choose rock, paper, or scissors: ").toLowerCase();
}

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
    if (playerSelection === computerSelection){
        return "Tie";
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return "win";
        }else {return "lose"}
    }else if(playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            return "win";
        }else {return "lose"}
    }else{
        if (computerSelection === 'paper'){
            return "win";
        }else {return "lose"}
    }
}

//      store win