// create variables that target relevent dom elements
var homeSection = document.querySelector('.home-section')
var gameDisplay = document.querySelector('.game-display')
var classicButton = document.querySelector('.classic-button')
var classicButtons = document.querySelector('.classic-buttons')
var difficultButton = document.querySelector('.difficult-button')
var difficultButtons = document.querySelector('.difficult-buttons')
var buttonsTemplate = document.querySelector('.buttons-template')
var changeGameButton = document.querySelector('.change-game-button')
var rockButton = document.querySelector('#rock')
var paperButton = document.querySelector('#paper')
var scissorsButton = document.querySelector('#scissors')
var rockButtonD = document.querySelector('.rock')
var paperButtonD = document.querySelector('.paper')
var scissorsButtonD = document.querySelector('.scissors')
var lizardButton = document.querySelector('.lizard')
var alienButton = document.querySelector('.alien')
var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')
var classicDisplay = document.querySelector('.classic-display')
var difficultDisplay = document.querySelector('.difficult-display')
var resultsTemplate = document.querySelector('.results-template')
var resultHeader = document.querySelector('.result-header')
var humanDifficult = document.querySelector('.human-difficult')
var humanClassic = document.querySelector('#human-classic')
var computerChoiceIMG = document.querySelector('.computer-choice-img')

// data model

var player = {
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
rockButtonD.addEventListener('click', createDifficultGame)
paperButtonD.addEventListener('click', createDifficultGame)
scissorsButtonD.addEventListener('click', createDifficultGame)
lizardButton.addEventListener('click', createDifficultGame)
alienButton.addEventListener('click', createDifficultGame)

// functions

function displayHome() {
  homeSection.classList.remove('hidden')
  changeGameButton.classList.add('hidden')
  hideGame()
}

function displayGameRPS() {
  gameDisplay.classList.remove('hidden')
  homeSection.classList.add('hidden')
  changeGameButton.classList.remove('hidden')
  difficultButtons.classList.add('hidden')
  classicButtons.classList.remove('hidden')
}

function displayGameRPSLA() {
  displayGameRPS()
  difficultButtons.classList.remove('hidden')
  classicButtons.classList.add('hidden')
}

function hideGame() {
  gameDisplay.classList.add('hidden')
}

function hideResultsDisplay() {
  resultsTemplate.classList.add('hidden')
}

function showResultsDisplay() {
  resultsTemplate.classList.remove('hidden')
}
// function toggleClassicResults(){
//   classicDisplay.classList.toggle('hidden')
// }

// function toggleDifficultResults(){
//   difficultDisplay.classList.toggle('hidden')
// }

function createGame(event) {
  var computerChoiceRPS = computerChoice()
  var humanChoice = event.target.id
  if (humanChoice === 'rock' && computerChoiceRPS === 'scissors' ||
    humanChoice === 'paper' && computerChoiceRPS === 'rock' || 
    humanChoice === 'scissors' && computerChoiceRPS === 'paper') {
    // winDisplay(event)
    resultsDisplay(event, '😎 You Win! 😎')
    addHumanWins()
  } else if (humanChoice === 'rock' && computerChoiceRPS === 'paper' ||
      humanChoice === 'paper' && computerChoiceRPS === 'scissors' ||
      humanChoice === 'scissors' && computerChoiceRPS === 'rock') {
      // loseDisplay(event)
      resultsDisplay(event, '😭 You lose 😭')
      addComputerWins()
  } else if(humanChoice === computerChoiceRPS || humanChoice === computerChoiceRPSLA){
      // tieDisplay(event)
      resultsDisplay(event, '🤯 tie 🤯')
  } 
  // toggleClassicResults()
  setTimeout(displayGameRPS, 3000)
  // setTimeout(toggleClassicResults, 3000)
  setTimeout(hideResultsDisplay, 3000)
  hideGame()
  displayWins()
}

function createDifficultGame(event) {
  var computerChoiceRPSLA = computerChoiceDifficult()
  var humanChoice = event.target.classList[0]
  if (humanChoice === 'rock' && computerChoiceRPSLA === 'scissors' ||
  humanChoice === 'rock' && computerChoiceRPSLA === 'lizard' ||
  humanChoice === 'paper' && computerChoiceRPSLA === 'rock' || 
  humanChoice === 'paper' && computerChoiceRPSLA === 'alien' ||
  humanChoice === 'scissors' && computerChoiceRPSLA === 'paper' ||
  humanChoice === 'scissors' && computerChoiceRPSLA === 'lizard' ||
  humanChoice === 'lizard' && computerChoiceRPSLA === 'paper' ||
  humanChoice === 'lizard' && computerChoiceRPSLA === 'alien' ||
  humanChoice === 'alien' && computerChoiceRPSLA === 'scissors' ||
  humanChoice === 'alien' && computerChoiceRPSLA === 'rock'
  ){
    // winDifficultDisplay(event, computerChoiceRPSLA)
    resultsDisplay(event, '😎 You Win! 😎')
    addHumanWins()
  } else if (humanChoice === 'rock' && computerChoiceRPSLA === 'paper' ||
  humanChoice === 'rock' && computerChoiceRPSLA === 'alien' ||
  humanChoice === 'paper' && computerChoiceRPSLA === 'scissors' ||
  humanChoice === 'paper' && computerChoiceRPSLA === 'lizard' ||
  humanChoice === 'scissors' && computerChoiceRPSLA === 'rock' ||
  humanChoice === 'scissors' && computerChoiceRPSLA === 'alien' ||
  humanChoice === 'lizard' && computerChoiceRPSLA === 'rock' ||
  humanChoice === 'lizard' && computerChoiceRPSLA === 'scissors' ||
  humanChoice === 'alien' && computerChoiceRPSLA === 'paper' ||
  humanChoice === 'alien' && computerChoiceRPSLA === 'lizard'
  ){
    // loseDifficultDisplay(event, computerChoiceRPSLA)
    resultsDisplay(event, '😭 You lose 😭')
    addComputerWins()
  } else if(humanChoice === computerChoiceRPSLA){
    // tieDifficultDisplay(event, computerChoiceRPSLA)
    resultsDisplay(event, '🤯 tie 🤯')
  } 
  // toggleDifficultResults()
  hideGame()
  displayWins()
  setTimeout(displayGameRPSLA, 3000)
  // setTimeout(toggleDifficultResults, 3000)
  setTimeout(hideResultsDisplay, 3000)
}

function resultsDisplay(event, h2){
  showResultsDisplay()
  resultHeader.innerText = h2
  console.log('hello')
  humanClassic.src = event.target.src
  humanDifficult.src = event.target.src
  console.log(computerChoiceRPS)
  computerChoiceIMG.src = `assets/happy-${computerChoiceRPS}.png` || `assets/happy-${computerChoiceRPSLA}.png`
  // classicDisplay.innerHTML = `
  // <h2>😎You Win!😎</h2>
  //   <div class="classic-buttons">
  //     <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
  //     <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
  //   </div>`
}

// function loseDisplay(event){
//   classicDisplay.innerHTML = `
//   <h2>You lose</h2>
//     <div class="classic-buttons">
//       <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
//       <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
//     </div>`
// }

// function tieDisplay(event){
//   classicDisplay.innerHTML = `
//   <h2>tie!</h2>
//     <div class="classic-buttons">
//       <img class="rock-button" id="${event.target.id}" src="${event.target.src}">
//       <img class="scissors-button" id="${computerChoiceRPS}" src="assets/happy-${computerChoiceRPS}.png">
//     </div>`
// }

// function winDifficultDisplay(event, computerChoiceRPSLA){
//   var humanChoice = event.target.classList[0]
//   difficultDisplay.innerHTML = `
//   <h2>😎You Win!😎</h2>
//     <div class="difficult-buttons">
//       <img class="${humanChoice}" src="${event.target.src}">
//       <img class="${computerChoiceRPSLA}" src="assets/happy-${computerChoiceRPSLA}.png">
//     </div>`
// }

// function loseDifficultDisplay(event, computerChoiceRPSLA){
//   var humanChoice = event.target.classList[0]
//   difficultDisplay.innerHTML = `
//   <h2>You lose</h2>
//     <div class="difficult-buttons">
//       <img class="${humanChoice}" src="${event.target.src}">
//       <img class="${computerChoiceRPSLA}" src="assets/happy-${computerChoiceRPSLA}.png">
//     </div>`
// }

// function tieDifficultDisplay(event, computerChoiceRPSLA){
//   var humanChoice = event.target.classList[0]
//   difficultDisplay.innerHTML = `
//   <h2>tie!</h2>
//     <div class="difficult-buttons">
//     <img class="${humanChoice}" src="${event.target.src}">
//     <img class="${computerChoiceRPSLA}" src="assets/happy-${computerChoiceRPSLA}.png">
//     </div>`
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

function computerChoiceDifficult(){
  var difficultChoice = Math.random()
if (difficultChoice<.2){
 return computerChoiceRPS = 'rock'
} else if (difficultChoice<.4){
 return computerChoiceRPS = 'paper'
} else if (difficultChoice<.6){
  return computerChoiceRPS = 'scissors'
} else if (difficultChoice<.8){
  return computerChoiceRPS = 'lizard'
}else if (difficultChoice<1){
  return computerChoiceRPS = 'alien'
}
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