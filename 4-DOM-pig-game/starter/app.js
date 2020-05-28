/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Additional Challenges
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)


*/

// Variables
var scores, roundScore, activePlayer, gamePlaying, lastDice;

// Run the function to start the new game when the page loads
newGame();

/* BUTTONS */

// Reset the game when the button is clicked
document.querySelector('.btn-new').addEventListener('click', newGame);

// Roll the dice when the button is clicked. Display this on the active players round score.
document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		// Generate a random number from 1-6
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// Display the result of the roll
		document.getElementById('dice-1').style.display = 'block' // Select the dice CLASS and store it in a variable.
		document.getElementById('dice-2').style.display = 'block' // Block will show the image
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'; // Update the image depending on what the dice rolls.
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		// Update the round score only if its NOT a 1
		if (dice1 !== 1 && dice2 !== 1) {
			// Add score to round score
			roundScore += dice1 + dice2;
			// Update the round score to the current player div
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			switchPlayer();
		}

		/* For challenge #2 only
		if (dice === 6 && lastDice === 6) {
			// Set active player score back to 0
			scores[activePlayer] = 0;
			// Change Dom back to 0
			document.getElementById('score-' + activePlayer).textContent = '0';
			switchPlayer();
		} else if (dice !== 1) { // Update the round score only if its NOT a 1
			// Add score to round score
			roundScore += dice;
			// Update the round score to the current player div
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			switchPlayer();
		}

		// Store the last dice value roll
		lastDice = dice;
		*/
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {

		// Add CURRENT roundScore to GLOBAL score
		scores[activePlayer] += roundScore;

		// Update the score of the current active player
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		// Store the input into the variable
		var declaredScore = document.querySelector('.final-score').value;
		var winningScore;

		// Check if the textbox is empty
		if(declaredScore) {
			// We check by putting out input into a variable.
			winningScore = declaredScore;
		} else {
			// We set a default winning score
			winningScore = 100;
		}

		// Check if player won the game
		if (scores[activePlayer] >= winningScore) {
			document.getElementById('name-' + activePlayer).innerHTML = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // Add the winner class from CSS
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // Removes the active class from css from the panel
			gamePlaying = false;
		} else {
			// Switch players once the button is clicked
			switchPlayer();
		}

	}
});

/* FUNCTIONS */

// A function to switch player.
function switchPlayer() {
		// Change to next players turn. Question mark is the if
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		// Set the roundScore back to 0 for both players
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// Move the active class to show who is the current player. Switching players.
		document.querySelector('.player-0-panel').classList.toggle('active'); // Classlist selects the class.
		document.querySelector('.player-1-panel').classList.toggle('active'); // Toggle states if its there add, if not remove it.

		// Hide the dice when it switches players
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
}

// A function to restart the game
function newGame() {
	// Keeps track of both players current score, the rolled score, and who the current player is
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	// Hide the dice image. Select the style method and set the CSS property display to none. Inline styling.
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	// Select all the elements for all of the players score and current score and set it to 0. Query selector also would work here
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// Change the names and its styling back to its original effects
	document.getElementById('name-0').innerHTML = 'Player 1';
	document.getElementById('name-1').innerHTML = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

/* NOTES */

// This is the "setter" b/c this is where we set the result of the rolled dice.
// document.querySelector('#current-' + activePlayer).textContent = dice;

// This is the "getter" b/c we get the content and store it into a variable.
// var x = document.querySelector('#score-0').textContent;

// document.querySelector('.player-0-panel').classList.remove('active'); // Classlist selects the class and removes it
// document.querySelector('.player-1-panel').classList.add('active'); // This adds active to the class
