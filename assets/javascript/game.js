// Randomly picks a number from 47 to 103 and sets it as the target number
var minNumber = 47;
var maxNumber = 103;
var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
var counter = 0;
var crystalNumbers = [4, 2, 8, 9];


$(document).ready(function() {
	$("#random-number").text(targetNumber);
	console.log(targetNumber);

	for (var i = 0; i < crystalNumbers.length; i++) {
		var purple = $("<img>");
		purple.addClass("crystal-image");
		purple.attr("src", "assets/images/purple.gif");
		purple.attr("data-crystalvalue", crystalNumbers[i]);
		$("#crystals").append(purple);
	}

	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	alert("New score: " + counter);

	    if (counter === targetNumber) {
	      alert("You win!");
	    }

	    else if (counter >= targetNumber) {
	      alert("You lose!!");
	    }
	});
});

