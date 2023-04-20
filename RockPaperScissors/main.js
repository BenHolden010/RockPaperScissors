// create variables that target relevent dom elements
var fighters = ['rock', 'paper', 'scissors', 'lizard', 'alien']
var rock = 0
var paper = 1
var scissors = 2
var lizard = 3
var alien = 4
function createPlayer(name) {
  var player = {
    name: name,
    wins: 0
  }
  return player
}

function createGame(input) {
  for (var i = 0; i < fighters.length; i++){
    if ( input === fighters[i]){
      return 'you entered a valid response'
    }
    return 'you did not enter a valid response'
  }
}
console.log(createPlayer('human'))
console.log(createGame('al'))