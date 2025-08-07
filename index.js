

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

function getHumanChoice() { // Calling this function prompts the dialogue box 
    result = prompt("Rock, paper, scissors, go!").toLowerCase();
    return result
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) { // Do I add getHumanChoice() to this function? What do I do to refresh the prompt?
        
        if (humanChoice === computerChoice) {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("Tie! Try again")
            console.log(humanScore, computerScore)
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You lose! Paper beats rock!")
            console.log(humanScore, ++computerScore)
             
        }
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You lose! Scissors beats paper!")
            console.log(humanScore, ++computerScore)
              
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You lose! Rock beats scissors!")
            console.log(humanScore, ++computerScore)
              
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You win! Rock beats scissors!")
            console.log(++humanScore, computerScore)
             
        }
        else if  (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You win! Paper beats rock!")
            console.log(++humanScore, computerScore)
             
                }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Player:", humanChoice, "Computer:", computerChoice)
            console.log("You win! Scissors beats paper!")
            console.log(++humanScore, computerScore)
                } 
    }

    return playRound(humanSelection, computerSelection);
}