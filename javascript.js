// prompt user for choice and store it
let playerChoice = prompt("Choose rock, paper, or scissors: ");

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
//      store value
// compare values
//      store win