// create variables that target relevent dom elements
var homeSection = document.querySelector('.home-section')
var gameDisplay = document.querySelector('.game-display')
var classicButton = document.querySelector('.classic-button')
var difficultButton = document.querySelector('.difficult-button')
var difficultButtons = document.querySelector('.difficult-buttons')
var changeGameButton = document.querySelector('.change-game-button')
var rockButton = document.querySelector('.rock-button')
var paperButton = document.querySelector('.paper-button')
var scissorsButton = document.querySelector('.scissors-button')
var lizardButton = document.querySelector('.lizard-button')
var alienButton = document.querySelector('.alien-button')

// create variables 

var playerWins = []
var computerWins = []

// create event listeners()

classicButton.addEventListener('click', displayGameRPS)
difficultButton.addEventListener('click', displayGameRPSLA)
changeGameButton.addEventListener('click', displayHome)
rockButton.addEventListener('click', createGame)
paperButton.addEventListener('click', createGame)
scissorsButton.addEventListener('click', createGame)
lizardButton.addEventListener('click', createGame)
alienButton.addEventListener('click', createGame)


// functions

function displayHome() {
  gameDisplay.classList.add('hidden')
  homeSection.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
}

function displayGameRPS() {
  gameDisplay.classList.remove('hidden')
  homeSection.classList.add('hidden')
  changeGameButton.classList.remove('hidden')
  difficultButtons.classList.add('hidden')
}

function displayGameRPSLA() {
  displayGameRPS()
  difficultButtons.classList.remove('hidden')
}

// function createPlayer() {
  var player = {
    name: 'human',
    playerWins: 0,
    computerWins: 0,
  }
//   return player
// }

function createGame(event) {
var computerChoiceRPS = computerChoice()
var humanChoice = event.target.id

if (humanChoice === 'rock'){
  if (computerChoiceRPS === 'rock') {
    return tieDisplay(event)
  } else if (computerChoiceRPS === 'paper'){
    return loseDisplay(event)
  } else if (computerChoiceRPS === 'scissors'){
    return winDisplay(event)
  }
} else if (humanChoice === 'paper'){
  if (computerChoiceRPS === 'rock') {
      return winDisplay(event)
  } else if (computerChoiceRPS === 'paper'){
      return tieDisplay(event)
  } else  if (computerChoiceRPS === 'scissors'){
      return loseDisplay(event)
  } 
} else if (humanChoice === 'scissors'){
  if (computerChoiceRPS === 'rock') {
    return loseDisplay(event)
  } else if (computerChoiceRPS === 'paper'){
      return winDisplay(event)
  } else if (computerChoiceRPS === 'scissors'){
      return tieDisplay(event)
  }
} 

}

function winDisplay(event){
  gameDisplay.innerHTML = `
  <h2>😎You Win!😎</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>
  `
}

function loseDisplay(event){
  gameDisplay.innerHTML = `
  <h2>You lose</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>
  `
}

function tieDisplay(event){
  gameDisplay.innerHTML = `
  <h2>tie!</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>`
}

function resetGameRPS(){
  gameDisplay.innerHTML = `
  <h2>Choose your fighter!</h2>
  <div class="classic-buttons">
    <img class="rock-button" id="rock" src="assets/happy-rock.png">
    <img class="paper-button" id="paper" src="assets/happy-paper.png">
    <img class="scissors-button" id="scissors" src="assets/happy-scissors.png">
  </div>
  <div class="difficult-buttons hidden">  
    <img class="lizard-button" id="lizard" src="assets/happy-lizard.png">
    <img class="alien-button" id="alien" src="assets/happy-alien.png">
  </div>`
}

function computerChoice(){
    var choice = Math.random()
  if (choice<.33){
   return computerChoiceRPS = 'rock'
  } else if (choice>.66){
   return computerChoiceRPS = 'paper'
  } else 
  return computerChoiceRPS = 'scissors'
}

// function humanChoice(event){
//   var humanChoice = event.target.id
//   return humanChoice
// }

function countWins(){
  // console.log(createGame('rock') === 'win')
  if (createGame('rock') === 'win'){
     player.playerWins += 1
     playerWins.push(player.playerWins)
  } else if (createGame('rock') === 'lose'){
    player.computerWins += 1
    computerWins.push(player.computerWins)
  }

}
// console.log(createPlayer())
// console.log(countWins())
// console.log('playerWins=' + playerWins)
// console.log('computerWins=' + computerWins)
// console.log(createGame())