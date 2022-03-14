const HAND = ['rock', 'paper', 'scissors']

let playerHand, computerHand;

function computerPlay () {
    computerHand = HAND[Math.floor(Math.random ()*3)]
    console.log(computerHand)
    return computerHand
}

function humanPlay () {
    playerHand = prompt('What is your hand?').toLowerCase()
    return playerHand
}

function playRound(playerHand, computerHand){
    if (computerHand == 'rock' && playerHand == "paper"
    || computerHand == "paper" && playerHand == "scissors"
    || computerHand == "scissors" && playerHand == "rock") {
        console.log(`You win: ${playerHand} beats ${computerHand}`)
    } 
    else if (computerHand == 'rock' && playerHand == "scissors"
    ||       computerHand == 'paper' && playerHand == "rock"
    ||       computerHand == 'scissors' && playerHand == "paper"){
        console.log(`You lose: ${playerHand} loses to ${computerHand}`)
    } 
    else {
        console.log("It's a tie!")
    }
}

function game (){
    for (let i = 0; i < 5; i++) {
        computerPlay();        
        humanPlay();
        playRound(playerHand, computerHand);
    }
}

game()

