let myArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let cpuScore = 0;
function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerChoice();
    if( playerSelection == computerSelection) {
        return("It's a Tie!");
    } else if(( playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") || 
        ( playerSelection == "scissors" && computerSelection == "rock")) {
            cpuScore += 1;
            return("You lost this round.");
        } else {
            playerScore += 1;
           return("You win this round.");
        }
}

function game(){
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}
function winner(){
    if(playerScore > cpuScore) {
        console.log("Player wins!");
    } else if(cpuScore > playerScore){
        console.log("CPU wins!");
    } else {
        console.log("It ended with a tie.");
    }
}
game();

console.log("Player Won: " + playerScore);
console.log("CPU won: " + cpuScore);

winner();
