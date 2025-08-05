let computerChoice = Math.random();

function getComputerChoice (computerChoice) {
    if (computerChoice < 0.3) {
        return "rock"
    }
    else if (computerChoice > 0.6) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let humanchoice = prompt("Rock, paper, scissors, go!");

function getHumanChoice (humanChoice) {
    console.log(humanChoice) 
    if (humanChoice === "rock") {
        return "rock"
    }
    else if (humanChoice === "paper") {
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
            console.log(humanScore, computerScore)
            console.log("You lose!")
            return (++computerScore)
        }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(humanScore, computerScore)
            console.log("You win!")
            return (++humanScore)
        }
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);