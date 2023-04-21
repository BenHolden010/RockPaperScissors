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

// var computerChoiceRPS = computerChoice()
// console.log(computerChoiceRPS)
var playerWins = []
var computerWins = []

// create event listeners()

classicButton.addEventListener('click', displayGameRPS)
difficultButton.addEventListener('click', displayGameRPSLA)
changeGameButton.addEventListener('click', displayHome)
rockButton.addEventListener('click', createGame)
paperButton.addEventListener('click', createGame)
scissorsButton.addEventListener('click', createGame)


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

function createGame(humanChoice) {
  console.log(event.target.id)

  var choice = Math.random()
  if (choice<.33){
    computerChoiceRPS = 'rock'
  } else if (choice>.66){
    computerChoiceRPS = 'paper'
  } else 
  computerChoiceRPS = 'scissors'
if (humanChoice === 'rock'){
  if (computerChoiceRPS === 'rock') {
    return 'tie'
  } else if (computerChoiceRPS === 'paper'){
    return 'lose'
  } else if (computerChoiceRPS === 'scissors'){
    return 'win'
  }
} else if (humanChoice === 'paper'){
  if (computerChoiceRPS === 'rock') {
      return 'win'
  } else if (computerChoiceRPS === 'paper'){
      return 'tie'
  } else  if (computerChoiceRPS === 'scissors'){
      return 'lose'
  } 
} else if (humanChoice === 'scissors'){
  if (computerChoiceRPS === 'rock') {
    return 'lose'
  } else if (computerChoiceRPS === 'paper'){
      return 'win'
  } else if (computerChoiceRPS === 'scissors'){
      return 'tie'
  }
} else 
return 'the createGame() function doesnt work'
}

// function computerChoice(){
//     var choice = Math.random()
//   if (choice<.33){
//    return computerChoiceRPS = 'rock'
//   } else if (choice>.66){
//    return computerChoiceRPS = 'paper'
//   } else 
//   return computerChoiceRPS = 'scissors'
// }

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