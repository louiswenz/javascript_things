let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")

let player = { name: 'Per', chips: 145 }

playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let num = Math.floor(Math.random() * 14)
    if (num === 1) { return 11 }
    else if (num > 10) { return 10 }
    return num
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "

        hasBlackJack = true
    } else {
        message = "You're out of the game! "

        isAlive = false
    }
    messageEl.textContent = message
    sumEL.textContent = 'Sum: ' + sum
    cardEL.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent += cards[i] + " "
    }

}
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let newc = getRandomCard()
        cards.push(newc)
        sum += newc
        renderGame()
    }

}