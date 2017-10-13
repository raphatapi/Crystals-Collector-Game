// Randomly picks a number from 47 to 103 and sets it as the target number
var minNumber = 47;
var maxNumber = 104;
var randomize = function getRandomInt(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
var counter = 0;
var gameScore = 0;
var gameLife = 3;


function playAgain() {
	// var playBtn = $("<button>");
 //    playBtn.addClass("play-button btn btn-success");
 //    $("#play").append(playBtn);
		$("#play").on("click", function() {
		    alert("Hello");
		});
	};


function displayValues() {
	$("#score").text(gameScore);
	$("#life").text(gameLife);
}

// function reloadPage() {
//     location.reload();
// }

function game(gameScore, gameLife) {
	displayValues();
	var targetNumber = randomize(47, 110);
	var gemValue1 = randomize(1, 5);
	var gemValue2 = randomize(4, 8);
	var gemValue3 = randomize(7, 11);
	var gemValue4 = randomize(10, 14);

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
	  	gameScore++;
	      $("#crystals").remove();
	      $("h1").text("You win!");
	      displayValues();
	      // $("#play").append("<br><button onclick='game(gameScore, gameLife)'>Play Again!</button>");
	    }

	    else if (counter > targetNumber) {
	    gameLife--;
	      $("#crystals").remove();
	      $("h2").text("Better luck next time");
	      displayValues();
	      // $("#play").append("<br><button onclick='game(gameScore, gameLife)'>Play Again!</button>");
	    }
	});
}

$(document).ready(function() {
	game(gameScore, gameLife);

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
});