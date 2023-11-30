import { setupDeck } from './deck.js';
import { startGame } from './game.js';
import { getNames, updatePlayerNames } from './store/state.js';

export function openGameOptions() {
	const backdropElement = document.querySelector('.backdrop');
	const playerFormElement = document.querySelector('.player-form');
	const player1Element = playerFormElement.querySelector('#player1');
	const player2Element = playerFormElement.querySelector('#player2');

	const names = getNames();

	playerFormElement.style.display = 'flex';
	backdropElement.style.display = 'flex';
	player1Element.value = names.player1;
	player2Element.value = names.player2;

	playerFormElement.addEventListener('submit', function (event) {
		event.preventDefault();
		const player1 = player1Element.value;
		const player2 = player2Element.value;

		if (player1 != '' && player2 != '') {
			backdropElement.style.display = 'none';
			playerFormElement.style.display = 'none';
			updatePlayerNames(player1, player2);
			setupDeck();
			startGame();
		} else {
			console.log('Please enter names for both players');
		}
	});
}
