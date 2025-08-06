

function getComputerChoice() {
    Math.random()
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

function getHumanChoice() {
    result = prompt("Rock, paper, scissors, go!").toLowerCase();
    return result
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) { // Do I add getHumanChoice() to this function? What do I do to refresh the prompt?
    if (humanChoice === computerChoice) {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("Tie! Try again")
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You lose! Paper beats rock!")
        return ++computerScore 
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You lose! Scissors beats paper!")
        return ++computerScore  
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You lose! Scissors beats paper!")
        return ++computerScore  
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You win! Rock beats scissors!")
        return ++humanScore 
    }
    else if  (humanChoice === "paper" && computerChoice === "rock") {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You win! Paper beats rock!")
        return ++humanScore 
            }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
        console.log("You win! Scissors beats paper!")
        return ++humanScore 
            }
        }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);