const getComputerChoice = Math.floor(Math.random() * 3) + 1;
const getUserChoice = prompt("Choose between Rock, Paper, Scissors");
console.log("User = " + getUserChoice)

if (getComputerChoice === 1) {
    console.log("Computer = Rock");
} else if (getComputerChoice === 2) {
    console.log("Computer = Paper");
} else if (getComputerChoice === 3){
    console.log("Computer = Scissors");
} else {
    console.log("There is a problem!");
}

const computerSelection = getComputerChoice;
const playerSelection = getUserChoice;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 1 && playerSelection === "Rock") {
        return alert("You both choosen Rock");
    } else if (computerSelection === 1 && playerSelection === "Paper") {
        return alert("You Win! Paper beats Rock")
    } else if (computerSelection === 1 && playerSelection === "Scissors") {
        return alert("You Lose! Rock beats Scissors")
    } else if (computerSelection === 2 && playerSelection === "Rock") {
        return alert("You Lose! Paper beats Rock")
    } else if (computerSelection === 2 && playerSelection === "Paper") {
        return alert("You both choosen Paper")
    }  else if (computerSelection === 2 && playerSelection === "Scissors") {
        return alert("You Win! Scissors beats Paper")
    } else if (computerSelection === 3 && playerSelection === "Rock") {
        return alert("You Win! Rock beats Scissors")
    }  else if (computerSelection === 3 && playerSelection === "Paper") {
        return alert("You Lose! Scissors beats Paper")
    }  else if (computerSelection === 3 && playerSelection === "Scissors") {
        return alert("You both choosen Scissors")
    } else {
        return alert("There is a problem");
    }
}

playRound(playerSelection, getComputerChoice)