
var alphabet = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","N","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



var pokemon = {
  blastoise: ["B","L","A","S","T","O","I","S","E"],
  charizard: ["C","H","A","R","I","Z","A","R","D"],
  arcanine: ["A","R","C","A","N","I","N","E"],
  moltres: ["M","O","L","T","R","E","S"],
  metagross: ["M","E","T","A","G","R","O","S","S"],
  hitmonlee: ["H","I","T","M","O","N","L","E","E"],
  ditto: ["D","I","T","T","O"],
  golduck: ["G","O","L","D","U","C","K"]
};


var pokemonArray = [pokemon.blastoise, pokemon.charizard, pokemon.arcanine, pokemon.moltres, pokemon.metagross, pokemon.hitmonlee, pokemon.ditto, pokemon.golduck];

var gameIndex = 0;

var guessIndex = 0;
var userInput
  
var userInputCap = userInput.toUpperCase();


    var userInputArray = [];
    function addGuess(){
      userInputArray.push("userInput");
    }

    var  letterCheckHolder = alpha.indexOf(userInputArray);
    function notLetter(){
      if (letterCheckHolder === -1) {
        return true;
      }
    }

    function noMorePuzzles(){
      if (gameIndex === pokemonArray.length) {
        return true;
    }

    var remainingGuesses = (pokemonArray[gameIndex].length + 7);
    function noMoreGuesses(){
      if (remainingGuesses === 0) {
        return true;
    }
    function updateRemainingGuesses(){
      document.querySelector("#guessesCount").innerHTML = remainingGuesses;
    }
      function lowerGuessCount(){
        remainingGuesses--;
      }

    var alreadyGuessedHolder = userInputArray.indexOf(userInputArray);
    function alreadyGuessed(){
      if (alreadyGuessedHolder === -1) {
        return true;
      }
    }

    function updateGuessedLetters(){
      document.querySelector("#lettersGuessed").innerHTML = userInputArray[guessIndex];
    }



startGame();
updateRemainingGuesses();

document.onkeyup = function(event) {


  userInput = event.key;

  addGuess();

  if (notLetter === true) {
    return;
  }

  console.log(userInputCap);

  if (noMorePuzzles === true) {
    return;
  }

  if (noMoreGuesses === true) {
    return;
  }

  if (alreadyGuessed === true) {
    return;
  }
 
  lowerGuessCount();


//this is where I would add some kind of 'you win' message to display or and end to the game but code broke somewhere and i spent hours trying to fix to no avail