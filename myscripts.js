let getComputerChoice = Math.floor(Math.random() * 3) + 1;
let getUserChoice = prompt("Choose between Rock, Paper, Scissor");
console.log(getUserChoice)

if (getComputerChoice === 1) {
    console.log("Rock");
} else if (getComputerChoice === 2) {
    console.log("Paper");
} else {
    console.log("Scissor");
}
