/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Create variables that is needed for the game
var scores, roundScore, activePlayer;

// Keeps track of both players current score, the rolled score, and who the current player is
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hide the dice image. Select the style method and set the CSS property display to none. Inline styling.
document.querySelector('.dice').style.display = 'none';

// Select all the elements for all of the players score and current score. Query selector also would work here
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Generate a random number when the button is clicked. Display this on the active players round score.
document.querySelector('.btn-roll').addEventListener('click', function() {

	// Roll the dice
	var dice = Math.floor(Math.random() * 6) + 1;

	// Display the result
	var diceDOM = document.querySelector('.dice'); // Select the dice image and store it in a variable.
	diceDOM.style.display = 'block'; // Block will show the hidden image.
	diceDOM.src = 'dice-' + dice + '.png'; // Update the image depending on what the dice rolls.

	// Update the round score only if its not a 1
	if (dice !== 1) {
		// Add score to round score
		roundScore += dice;
		// Update the round score to the current player div
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		switchPlayer();
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	// Add CURRENT roundScore to GLOBAL score
	scores[activePlayer] += roundScore

	// Update the score of the current active player to the GLOBAL UI
	document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

	// Check if player won the game
	if (scores[activePlayer] >= 10) {
		document.getElementById('name-' + activePlayer).innerHTML = 'Winner!';
		document.getElementById('dice2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // Add the winner class from CSS
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // Removes the active class from css from the panel
	} else {
		// Switch players once the button is clicked
		switchPlayer();
	}


})


function switchPlayer() {
		// Change to next players turn. Question mark is the if
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		// Set the roundScore back to 0 as well as showing on the div
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// Move the active class to show who is the current player. Switching players.
		document.querySelector('.player-0-panel').classList.toggle('active'); // Classlist selects the class.
		document.querySelector('.player-1-panel').classList.toggle('active'); // Toggle states if its there add, if not remove it.

		// Hide the dice when it switches players
		document.getElementById('dice2').style.display = 'none';
}


// This is the "setter" b/c this is where we set the result of the rolled dice.
// document.querySelector('#current-' + activePlayer).textContent = dice;

// This is the "getter" b/c we get the content and store it into a variable.
// var x = document.querySelector('#score-0').textContent;

// document.querySelector('.player-0-panel').classList.remove('active'); // Classlist selects the class and removes it
// document.querySelector('.player-1-panel').classList.add('active'); // This adds active to the class
