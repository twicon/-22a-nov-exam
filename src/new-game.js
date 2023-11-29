import { setupDeck } from './deck.js';
import { startGame } from './game.js';
import { updatePlayerNames } from './store/state.js';

export function openGameOptions() {
	const backdrop = document.querySelector('.backdrop');
	const playerForm = document.querySelector('.player-form');

	backdrop.style.display = 'flex';
	playerForm.style.display = 'flex';

	playerForm.addEventListener('submit', function (event) {
		event.preventDefault();
		const player1 = playerForm.querySelector('#player1').value;
		const player2 = playerForm.querySelector('#player2').value;

		if (player1 != '' && player2 != '') {
			backdrop.style.display = 'none';
			playerForm.style.display = 'none';
			updatePlayerNames(player1, player2);
			setupDeck();
			startGame();
		} else {
			console.log('Please enter names for both players');
		}
	});
}
