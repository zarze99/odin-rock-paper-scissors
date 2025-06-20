function getComputerChoice(){
    let i = 3*Math.random()
    if(i <= 1){
        return "rock"
    }
    if(i <= 2){
        return "paper"
    }
    return "scissors"
}

function getHumanChoice(){
    let str = prompt("Enter Rock, Paper, or Scissors.")
    return str
}

function playGame(){

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase(humanChoice)
    
        if(humanChoice == computerChoice){
            console.log(`Draw! ${computerChoice} equals ${humanChoice}`)
            return
        }    
    
        const winDialog = `You win! ${humanChoice} beats ${computerChoice}`
        const loseDialog = `You Lose! ${computerChoice} beats ${humanChoice}`
    
        if(humanChoice == "rock"){
            if(computerChoice == "paper"){
            console.log(loseDialog)
            computerScore++
            }
            else {
                console.log(winDialog)
                humanScore++
            }
        }
    
        if(humanChoice == "paper"){
            if(computerChoice == "scissors"){
            console.log(loseDialog)
            computerScore++
            }
            else {
                console.log(winDialog)
                humanScore++
            }
        }
    
        if(humanChoice == "scissors"){
            if(computerChoice == "rock"){
            console.log(loseDialog)
            computerScore++
            }
            else {
                console.log(winDialog)
                humanScore++
            }
        }
    
    }

    for(i = 0; i != 5; i++){
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }

    console.log(`Final Score was ${humanScore} to ${computerScore}`)

    if(humanScore == computerScore){
        console.log("You Tied!")
    }

    if(humanScore > computerScore){
        console.log("You Win!")
    }

    if(humanScore < computerScore){
        console.log("You Lose!")
    }


}

playGame()