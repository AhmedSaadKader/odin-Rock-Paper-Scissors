const HAND = ['rock', 'paper', 'scissors']

let playerHand, computerHand;

function computerPlay () {
    computerHand = HAND[Math.floor(Math.random ()*3)]
    console.log(computerHand)
    return computerHand
}

function humanPlay () {
    playerHand = prompt('What is your hand?')
    return playerHand
}

computerPlay()
humanPlay()


if (computerHand == 'rock' && playerHand == "paper"
 || computerHand == "paper" && playerHand == "scissors"
 || computerHand == "scissors" && playerHand == "rock") {
    alert(`You win: ${playerHand} beats ${computerHand}`)
} 
// else if (computerHand )