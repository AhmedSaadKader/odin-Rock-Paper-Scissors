const HAND = ['rock', 'paper', 'scissors']
let playerHand, computerHand, playerScore = 0, computerScore = 0; 
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const computerChoiceElement = document.getElementById('computer-choice')
const playerChoiceElement = document.getElementById('player-choice')
const outcomeElement = document.getElementById('outcome')
const ScoreElement = document.getElementById('score')

function computerPlay () {
    computerHand = HAND[Math.floor(Math.random ()*3)]
    computerChoiceElement.innerText = computerHand
    return computerHand
}

function humanPlay (e) {
    // playerHand = prompt('What is your hand?').toLowerCase()
    // console.log(e.target.)
    playerHand = e.target.innerText.toLowerCase()
    playerChoiceElement.innerText = playerHand
    return playerHand
}

function updateScorePlayerWin(playerHand, computerHand){

}

function playRound(playerHand, computerHand){
    if (computerHand == 'rock' && playerHand == "paper"
    || computerHand == "paper" && playerHand == "scissors"
    || computerHand == "scissors" && playerHand == "rock") {
        playerScore += 1;
        outcomeElement.innerText = `Computer played ${computerHand}\nYou win: ${playerHand} beats ${computerHand}`
        ScoreElement.innerText = `Score is Player:${playerScore}---Computer: ${computerScore}`
    } 
    else if (computerHand == 'rock' && playerHand == "scissors"
    ||       computerHand == 'paper' && playerHand == "rock"
    ||       computerHand == 'scissors' && playerHand == "paper"){
        computerScore += 1;
        outcomeElement.innerText = `Computer played ${computerHand}\nYou lose: ${playerHand} loses to ${computerHand}`
        ScoreElement.innerText = `Score is Player:${playerScore}---Computer: ${computerScore}`
    } 
    else {
        outcomeElement.innerText = "It's a tie!"
    }
}

function game (playerHand){
    // for (let i = 0; i < 5; i++) {
        computerPlay();        
        console.log(playerHand)
        // playerSelection = document.getElementById('playerHand').innerHTML = playerHand 
        playRound(playerHand, computerHand);
    // }
}



rockButton.addEventListener('click', (e) => humanPlay(e))
rockButton.addEventListener('click', () => game(playerHand))
paperButton.addEventListener('click', (e) => humanPlay(e))
paperButton.addEventListener('click', () => game(playerHand))
scissorsButton.addEventListener('click', (e) => humanPlay(e))
scissorsButton.addEventListener('click', () => game(playerHand))
