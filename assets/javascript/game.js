// Randomly picks a number from 47 to 103 and sets it as the target number
var minNumber = 47;
var maxNumber = 104;
var randomize = function getRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
var counter = 0;
var gameScore = 0;
var gameLife = 3;
var targetNumber = randomize(47, 110);
var gemValue1 = randomize(1, 5);
var gemValue2 = randomize(4, 8);
var gemValue3 = randomize(7, 11);
var gemValue4 = randomize(10, 14);

$(document).ready(function() {

	var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/song/theme.mp3");
      audioElement.play();
      $("#theme-button").text("Pause Music");

    //Use button to toggle music on/off
    $("#theme-button").on("click", function() {
          //If it's not paused then pause it and change button text to "Play Music"
          if (!audioElement.paused) {
            audioElement.pause();           
            $("#theme-button").text("Play Music");
          //Or do the opposite
        } else {
            audioElement.play();           
          $("#theme-button").text("Pause Music");
        }
      });

	playAgain();
    game(gameScore, gameLife);
});


function playAgain() {
	var playBtn = $("<button>");
    playBtn.addClass("btn btn-primary btn-center");
    playBtn.text("Play Again!");
    $("#play").append(playBtn);

	$("#play").on("click", function() {
		counter = 0;
		$("#userGuess").text(counter);
		$("#gem").show();
		targetNumber = randomize(47, 110);
		gemValue1 = randomize(1, 5);
		gemValue2 = randomize(4, 8);
		gemValue3 = randomize(7, 11);
		gemValue4 = randomize(10, 14);
		$("#random-number").text(targetNumber);
		$("#purple").attr("data-crystalvalue", gemValue1);
		$("#pink").attr("data-crystalvalue", gemValue2);
		$("#ruby").attr("data-crystalvalue", gemValue3);
		$("#diamond").attr("data-crystalvalue", gemValue4);
	
	});
};

function reloadPage() {
    location.reload();
};

function displayValues(gameScore, gameLife) {
	$("#score").text(gameScore);
	$("#life").text(gameLife);
}

function game(gameScore, gameLife) {
	displayValues(gameScore, gameLife);
	
	$("#random-number").text(targetNumber);
	$("#purple").attr("data-crystalvalue", gemValue1);
	$("#pink").attr("data-crystalvalue", gemValue2);
	$("#ruby").attr("data-crystalvalue", gemValue3);
	$("#diamond").attr("data-crystalvalue", gemValue4);
	
	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	$("#userGuess").text(counter);

	    if (counter === targetNumber) {
	  	gameScore += 1;
	      $("#gem").hide();
	      $("h2").text("Well Done!");
	      displayValues(gameScore, gameLife);
	    }

	    else if (counter > targetNumber) {
	    gameLife -= 1;
	      $("#gem").hide();
	      $("h2").text("Better luck next time");
	      displayValues(gameScore, gameLife);
	      if (gameLife===0) {
	      	$("#gem").hide();
		    $("h2").text("Game Over!");
		    displayValues(gameScore, gameLife);
		    $("#reset").append("<br><button class='btn btn-primary btn-center'onclick='reloadPage()'>Reset</button>");
	      };
	    };
	});
};