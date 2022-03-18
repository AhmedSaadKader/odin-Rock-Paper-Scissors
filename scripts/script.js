const HAND = ['rock', 'paper', 'scissors']

let playerHand, computerHand, playerScore = 0, computerScore = 0, playerSelection; 

function computerPlay () {
    computerHand = HAND[Math.floor(Math.random ()*3)]
    // console.log(computerHand)
    return computerHand
}

function humanPlay () {
    playerHand = prompt('What is your hand?').toLowerCase()
    
    return playerHand, playerSelection
}

function playRound(playerHand, computerHand){
    if (computerHand == 'rock' && playerHand == "paper"
    || computerHand == "paper" && playerHand == "scissors"
    || computerHand == "scissors" && playerHand == "rock") {
        playerScore += 1;
        console.log(`Computer played ${computerHand}`)
        console.log(`You win: ${playerHand} beats ${computerHand}`)
        console.log(`Score is Player:${playerScore}---Computer: ${computerScore}`)
    } 
    else if (computerHand == 'rock' && playerHand == "scissors"
    ||       computerHand == 'paper' && playerHand == "rock"
    ||       computerHand == 'scissors' && playerHand == "paper"){
        computerScore += 1;
        console.log(`Computer played ${computerHand}`)
        console.log(`Score is Player:${playerScore}---Computer: ${computerScore}`)
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
        // playerSelection = document.getElementById('playerHand').innerHTML = playerHand 
        playRound(playerHand, computerHand);
    }
}

game()

