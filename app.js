import { setupDeck } from './src/deck.js';
import { startGame } from './src/game.js';
import { setupScoreboardListener } from './src/listeners.js';
import { updatePlayerNames } from './src/store/state.js';

setupDeck();
setupScoreboardListener();
startGame();

document
	.querySelector('#playerForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		var player1 = document.querySelector('#player1').value;
		var player2 = document.querySelector('#player2').value;

		console.log('Player one: ' + player1);
		console.log('Player two: ' + player2);

		if (player1 != '' && player2 != '') {
			updatePlayerNames(player1, player2);
		} else {
			console.log('Please enter names for both players');
		}
	});
