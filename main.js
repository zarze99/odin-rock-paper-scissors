function getComputerChoice(){
    let i = Math.random()
    if(i < 0){
        return "rock"
    }
    if(i > 0){
        return "paper"
    }
    return "scissors"
}

function getHumanChoice(){
    let str = prompt("Enter Rock, Paper, or Scissors.")
    return str
}

let humanScore = 0
let computerScore = 0