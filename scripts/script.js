console.log(Math.random()*3)

const HAND = ['rock', 'paper', 'scissors']

function computerPlay () {
    const computerHand = HAND[Math.floor(Math.random ()*3)]
    console.log(computerHand)
}

function humanPlay () {
    const playerHand = prompt('What is your hand?')
}

computerPlay()
humanPlay()

if (computerHand == 'rock' && PlayerHand == "paper" || computerHand == "") {
    alert('You win: paper beats rock')
} else if (computerHand )