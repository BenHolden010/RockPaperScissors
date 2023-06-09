// create variables that target relevent dom elements

var homeSection = document.querySelector('.home-section');
var gameDisplay = document.querySelector('.game-display');
var classicButton = document.querySelector('.classic-button');
var classicButtons = document.querySelector('.classic-buttons');
var difficultButton = document.querySelector('.difficult-button');
var difficultButtons = document.querySelector('.difficult-buttons');
var changeGameButton = document.querySelector('.change-game-button');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var resultsTemplate = document.querySelector('.results-template');
var resultHeader = document.querySelector('.result-header');
var humanDifficult = document.querySelector('.human-difficult');
var humanClassic = document.querySelector('#human-classic');
var computerChoiceIMG = document.querySelector('.computer-choice-img');

// data model

var fighters = ['rock','paper','scissors','lizard','alien'];
var player = {
  playerWins: 0,
  computerWins: 0,
};

// create event listeners()

classicButton.addEventListener('click', displayGameRPS);
difficultButton.addEventListener('click', displayGameRPSLA);
changeGameButton.addEventListener('click', displayHome);
classicButtons.addEventListener('click', function (event) {
  createGame(event)});
difficultButtons.addEventListener('click', function (event) {
  createDifficultGame(event)});

// functions

function displayHome() {
  homeSection.classList.remove('hidden');
  changeGameButton.classList.add('hidden');
  hideGame();
};

function displayGameRPS() {
  gameDisplay.classList.remove('hidden');
  homeSection.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  difficultButtons.classList.add('hidden');
  classicButtons.classList.remove('hidden');
};

function displayGameRPSLA() {
  displayGameRPS();
  difficultButtons.classList.remove('hidden');
  classicButtons.classList.add('hidden');
};

function hideGame() {
  gameDisplay.classList.add('hidden');
  changeGameButton.classList.add('hidden');
};

function toggleResultsDisplay() {
  resultsTemplate.classList.toggle('hidden');
};

function createGame(event) {
  var computerChoiceRPS = computerChoice(3);
  var humanChoice = event.target.id;
  if (humanChoice === 'rock' && computerChoiceRPS === 'scissors' ||
    humanChoice === 'paper' && computerChoiceRPS === 'rock' || 
    humanChoice === 'scissors' && computerChoiceRPS === 'paper') {
    resultsDisplay(event, '😎 You Win! 😎')
    addHumanWins()
  }  else if(humanChoice === computerChoiceRPS) {
      resultsDisplay(event, '🤯 tie 🤯')
  } else {
  resultsDisplay(event, '💻 Computer wins 💻')
  addComputerWins()
  };
  hideGame();
  setTimeout(displayGameRPS, 3000);
  setTimeout(toggleResultsDisplay, 3000);
};

function createDifficultGame(event) {
  var computerChoiceRPSLA = computerChoice(5);
  var humanChoice = event.target.classList[0];
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
    resultsDisplay(event, '😎 You Win! 😎')
    addHumanWins()
  } else if(humanChoice === computerChoiceRPSLA){
    resultsDisplay(event, '🤯 tie 🤯')
  } else {
    resultsDisplay(event, '💻 Computer wins 💻')
    addComputerWins()
  };
  hideGame();
  setTimeout(displayGameRPSLA, 3000);
  setTimeout(toggleResultsDisplay, 3000);
};

function resultsDisplay(event, h2) {
  resultHeader.innerText = h2;
  humanClassic.src = event.target.src;
  humanDifficult.src = event.target.src;
  humanClassic.alt = event.target.id;
  computerChoiceIMG.src = `assets/happy-${computerChoiceRPS}.png` ||
   `assets/happy-${computerChoiceRPSLA}.png`;
  computerChoiceIMG.alt = computerChoiceRPS || computerChoiceRPSLA;
  toggleResultsDisplay();
};

function computerChoice(numFighters) {
  return computerChoiceRPS = fighters[Math.floor(Math.random() * numFighters)];
};

function addHumanWins() {
  player.playerWins += 1;
  humanWins.innerHTML = `wins: ${player.playerWins}`;
};

function addComputerWins() {
  player.computerWins += 1;
  computerWins.innerHTML = `wins: ${player.computerWins}`;
};