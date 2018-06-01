// variables for wins, losses, and guess count //
var winCount = 0;
var lossCount = 0;
var playerGuessTotal = 0;

// random winning number //
var randomNumber = Math.floor(Math.random()*(120-19+1) + 19);

// random values for doughnuts //
var randomValue = function(){
    return Math.floor(Math.random()*(12) + 1);
};
// variables for doughnuts //
var strawberryDoughnut = randomValue();
var chocolateDoughnut = randomValue();
var cinnamonDoughnut = randomValue();
var glazedDoughnut = randomValue();

// set counters for "winning number" and "doughnut total" to HTML //
$("#winningNumber").html(randomNumber);
$("#doughnutTotal").html(playerGuessTotal);

// set counter for wins and losses to HTML //
function printToHTML(){
    var playerScore = "Player Score:" + "<br><br>" +
      "wins: " + winCount + "<br>" +
      "losses: " + lossCount + "<br>";
    $("#player-score").html(playerScore);  
};
// link counters to html//
printToHTML();
// resetting the game //
var resetGame = function(){
    playerGuessTotal = 0;
    randomNumber = Math.floor(Math.random()*(120-19+1) + 19);
    $("#winningNumber").text(randomNumber);
    $("doughnutTotal").html(playerGuessTotal);
    strawberryDoughnut = randomValue();
    chocolateDoughnut = randomValue();
    cinnamonDoughnut = randomValue();
    glazedDoughnut = randomeValue();
};

// function for passing doughnut values through conditionals //
function checkValue(doughnutValue){
    playerGuessTotal += puppyValue;
    if (playerGuessTotal < randomNumber){
        $("#doughnutTotal").text(playerGuessTotal);
    } else if (playerGuessTotal === randomNumber){
        winCount += 1;
        $("#doughnutTotal").text(playerGuessTotal);
        printToHTML();
        resetGame();
    } else {
        lossCount +=1;
        $("#doughnutTotal").text(playerGuessTotal);
        printToHTML();
        resetGame();
    } ;
}

