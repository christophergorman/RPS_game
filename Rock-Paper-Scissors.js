const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const playerWins = document.querySelector('#playerScore');
const CPUWins = document.querySelector('#computerScore');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;
let result;
let playerScore = 0;
let CPUScore = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    playerWins.textContent = `Number of Player Wins: ${playerScore}`;
    CPUWins.textContent = `Number of CPU Wins: ${CPUScore}`;
    resultText.textContent = Winner();
    checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = 'ROCK';
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function Winner(){
    if(playerScore == 5) {
        return 'You Win!';
    }
    else if(CPUScore == 5) {
        return 'You Lose!';
    }
}

function checkWinner() {
    if(player == computer) {
        return 'Draw!';
    }
    else if(computer == 'ROCK'){
        return player == 'PAPER' ?  playerScore++ :  CPUScore++
    }
    else if(computer == 'PAPER'){
        return player == 'SCISSORS' ?  playerScore++ :  CPUScore++
    }
    else if(computer == 'SCISSORS'){
        return player == 'ROCK' ?  playerScore++ :  CPUScore++
    }
}