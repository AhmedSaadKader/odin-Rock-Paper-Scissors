const HAND = ['rock', 'paper', 'scissors']
let playerHand, computerHand, playerScore = 0, computerScore = 0, gameNumber= 0; 
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const choicesDiv = document.getElementById('choices')
const computerChoiceElement = document.getElementById('computer-choice')
const playerChoiceElement = document.getElementById('player-choice')
const scoreOutcomeDiv = document.getElementById('score-outcome')
const ScoreElement = document.getElementById('score')
const gameOver = document.getElementById('game-over')

function computerPlay () {
    computerHand = HAND[Math.floor(Math.random ()*3)]
    computerChoiceElement.innerText = computerHand
    return computerHand
}

function humanPlay (e) {
    // playerHand = prompt('What is your hand?').toLowerCase()
    // console.log(e.target.)
    playerHand = e.currentTarget.getAttribute('id')
    playerChoiceElement.innerText = playerHand
    return playerHand
}

function playRound(playerHand, computerHand){
    if (computerHand == 'rock' && playerHand == "paper"
    || computerHand == "paper" && playerHand == "scissors"
    || computerHand == "scissors" && playerHand == "rock") {
        playerScore += 1;
        ScoreElement.innerText = `Score is Player:${playerScore}---Computer: ${computerScore}`
    } 
    else if (computerHand == 'rock' && playerHand == "scissors"
    ||       computerHand == 'paper' && playerHand == "rock"
    ||       computerHand == 'scissors' && playerHand == "paper"){
        computerScore += 1;
        ScoreElement.innerText = `Score is Player:${playerScore}---Computer: ${computerScore}`
    } 
    else {
        // outcomeElement.innerText = "It's a tie!"
    }
}

function game (e){
        if (gameNumber < 5){
            humanPlay(e)
            computerPlay();        
            playRound(playerHand, computerHand);
            gameNumber += 1
            if (gameNumber === 5){
                choicesDiv.remove()
                scoreOutcomeDiv.remove()
                if (playerScore > computerScore){
                    gameOver.innerText = 'Game over\nYou win'
                }else if (computerScore > playerScore){
                    gameOver.innerText = 'Game over\nYou lose'
                }else {
                    gameOver.innerText = 'Game over\nIt\'s a tie'
                }
            }    
        } else if (gameNumber === 5){
            return
        }
}



// rockButton.addEventListener('click', (e) => humanPlay(e))
rockButton.addEventListener('click', (e) => game(e))
paperButton.addEventListener('click', (e) => game(e))
scissorsButton.addEventListener('click', (e) => game(e))
