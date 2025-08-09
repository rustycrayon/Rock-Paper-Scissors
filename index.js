

function getComputerChoice() {
    Math.random()
    if (Math.random() < 0.3) {
        return "Rock"
    }
    else if (Math.random() > 0.6) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    answer = prompt("Rock, paper, scissors, go!");
    finalAnswer = answer.charAt(0).toUpperCase()
        + answer.slice(1)
    return finalAnswer 
}

function playGame() {
     
        let humanScore = 0;
        let computerScore = 0;
        
            function playRound(humanChoice, computerChoice) { 
                
                if (humanChoice === computerChoice) {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("Tie!")
                    console.log(humanScore, computerScore)
                }
                else if (humanChoice === "Rock" && computerChoice === "Paper") {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You lose! Paper beats rock!")
                    console.log(humanScore, ++computerScore)
                    
                }
                else if (humanChoice === "Paper" && computerChoice === "Scissors"){
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You lose! Scissors beats paper!")
                    console.log(humanScore, ++computerScore)
                    
                }
                else if (humanChoice === "Scissors" && computerChoice === "Rock") {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You lose! Rock beats scissors!")
                    console.log(humanScore, ++computerScore)
                    
                }
                else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You win! Rock beats scissors!")
                    console.log(++humanScore, computerScore)
                    
                }
                else if  (humanChoice === "Paper" && computerChoice === "Rock") {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You win! Paper beats rock!")
                    console.log(++humanScore, computerScore)
                    
                        }
                else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                    console.log("Player:", humanChoice, "\nComputer:", computerChoice)
                    console.log("You win! Scissors beats paper!")
                    console.log(++humanScore, computerScore)
                        } 
            }

        for (let i = 1; i < 6; i++) {
            playRound(getHumanChoice(), getComputerChoice());
        }
          
    if (humanScore > computerScore) {
            console.log("You won the game! Congratulations!")
        }
        else if (humanScore < computerScore) {
            console.log("You lost the game! Try again!")
        }
        else {
            console.log("You tied! Try again!")
        } 
}