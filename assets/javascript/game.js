//Letter choices available

var mainLetters = [
"A","B","C","D","E",
"F","G","H","I","J",
"K","L","M","N",
"O","P","Q","R",
"S","T","U","V",
"W","X","Y","Z"];  //computerChoices to mainLetters

//My own Experience//////////////////////////////////////
var allLetters = mainLetters.join("-");
console.log(allLetters);

document.querySelector("#All_Letters").innerHTML = allLetters;
/////////////////////////////////////////////////////////


//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 10;
var remainedGuess= 10; 
var LettersGuessed = []; 
var lettersToGuess = null; 



var computerGuess = mainLetters[Math.floor(Math.random() * mainLetters.length)];



var sendRemainedGuess = function() {
  
  document.querySelector("#Guess_Left").innerHTML = "Guesses left: " + remainedGuess;
}; 


var letterToGuess = function() {
  this.lettersToGuess = this.mainLetters[Math.floor(Math.random() * this.mainLetters.length)];

  console.log(this.lettersToGuess);
}; 


var sendGuessSoFar = function() {
  
  document.querySelector("#Your_Guesses").innerHTML = "Your Guesses so far: " + LettersGuessed.join(', ');
}; 




var reset = function() {
  totalGuesses = 10;
  remainedGuess = 10;
  LettersGuessed = [];

  letterToGuess();
  sendRemainedGuess();
  sendGuessSoFar();
}


// START UP//
letterToGuess();
sendRemainedGuess();




document.onkeyup = function(event) {
  remainedGuess--;
  var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();

  LettersGuessed.push(playerGuess);
  sendRemainedGuess();
  sendGuessSoFar();

        if (remainedGuess > 0){
            if (playerGuess == lettersToGuess){
                wins++;
                document.querySelector('#Wins').innerHTML =  wins;
                
                reset();
            }
        }else if(remainedGuess == 0){
            
            losses++;
            document.querySelector('#Losses').innerHTML =  losses;
            
            reset();
        }
};
