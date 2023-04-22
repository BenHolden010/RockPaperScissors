// create variables that target relevent dom elements
var homeSection = document.querySelector('.home-section')
var gameDisplay = document.querySelector('.game-display')
var classicButton = document.querySelector('.classic-button')
var difficultButton = document.querySelector('.difficult-button')
var difficultButtons = document.querySelector('.difficult-buttons')
var changeGameButton = document.querySelector('.change-game-button')
var rockButton = document.querySelector('#rock')
var paperButton = document.querySelector('#paper')
var scissorsButton = document.querySelector('#scissors')
var lizardButton = document.querySelector('#lizard')
var alienButton = document.querySelector('#alien')
var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')
var resultsDisplay = document.querySelector('.results-display')

// create variables 

var fightersRPS = ['rock','paper','scissors']
var player = {
  name: 'human',
  playerWins: 0,
  computerWins: 0,
}

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

function hideGame(){
  gameDisplay.classList.add('hidden')
}

function hideResults(){
  resultsDisplay.classList.add('hidden')
}

function showResults(){
  resultsDisplay.classList.remove('hidden')
}

function createGame(event) {
  var computerChoiceRPS = computerChoice()
  var humanChoice = event.target.id
  if (humanChoice === 'rock' && computerChoiceRPS === 'rock'){
    tieDisplay(event)
  } else if (humanChoice === 'rock' && computerChoiceRPS === 'paper'){
    loseDisplay(event)
    addComputerWins()
  } else if (humanChoice === 'rock' && computerChoiceRPS === 'scissors'){
    winDisplay(event)
    addHumanWins()
  } else if (humanChoice === 'paper' && computerChoiceRPS === 'rock'){
    winDisplay(event)
    addHumanWins()
  } else if (humanChoice === 'paper' && computerChoiceRPS === 'paper'){
    tieDisplay(event)
  } else if (humanChoice === 'paper' && computerChoiceRPS === 'scissors'){
    loseDisplay(event)
    addComputerWins()
  } else if (humanChoice === 'scissors' && computerChoiceRPS === 'rock') {
    loseDisplay(event)
    addComputerWins()
  } else if (humanChoice === 'scissors' && computerChoiceRPS === 'paper'){
    winDisplay(event)
    addHumanWins()
  } else if (humanChoice === 'scissors' && computerChoiceRPS === 'scissors'){
    tieDisplay(event)
  }
  showResults()
  setTimeout(displayGameRPS, 3000)
  setTimeout(hideResults, 3000)
  hideGame()
  displayWins()
}


function winDisplay(event){
  resultsDisplay.innerHTML = `
  <h2>😎You Win!😎</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>`
}

function loseDisplay(event){
  resultsDisplay.innerHTML = `
  <h2>You lose</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>`
}

function tieDisplay(event){
  resultsDisplay.innerHTML = `
  <h2>tie!</h2>
    <div class="classic-buttons">
      <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
      <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
    </div>`
}

// function resetGameRPS(){
//   gameDisplay.innerHTML = `
//   <h2>Choose your fighter!</h2>
//   <div class="classic-buttons">
//     <img class="rock-button" id="rock" src="assets/happy-rock.png">
//     <img class="paper-button" id="paper" src="assets/happy-paper.png">
//     <img class="scissors-button" id="scissors" src="assets/happy-scissors.png">
//   </div>
//   <div class="difficult-buttons hidden">  
//     <img class="lizard-button" id="lizard" src="assets/happy-lizard.png">
//     <img class="alien-button" id="alien" src="assets/happy-alien.png">
//   </div>`
// }

function computerChoice(){
    var choice = Math.random()
  if (choice<.33){
   return computerChoiceRPS = 'rock'
  } else if (choice>.66){
   return computerChoiceRPS = 'paper'
  } else 
  return computerChoiceRPS = 'scissors'
}


function addHumanWins(){
  player.playerWins += 1
}

function addComputerWins(){
  player.computerWins += 1
}

function displayWins(){
computerWins.innerHTML = `wins: ${player.computerWins}`
humanWins.innerHTML = `wins: ${player.playerWins}`
}
