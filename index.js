
function getComputerChoice () {
    if (Math.random() < 0.3) {
        return "rock"
    }
    else if (Math.random() > 0.6) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


function getHumanChoice () {
    let message = prompt("Rock, paper, scissors, go!");
    if (message === "rock") {
        return "rock"
    }
    else if (message === "paper") {
        return "paper"
    }
    else {
        return "scissors"
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice.toLowerCase ();
    
    if ((humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
            console.log("You lose!")
        }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!")
        }
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);