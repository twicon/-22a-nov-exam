import { setupDeck } from './deck.js';
import { startGame } from './game.js';
import { getNames, updatePlayerNames } from './store/state.js';

export function openGameOptions() {
	const newGameDrawer = document.querySelector('.new-game');
	const playerFormElement = document.querySelector('.new-game__form');
	const player1Element = playerFormElement.querySelector('#player1');
	const player2Element = playerFormElement.querySelector('#player2');
	const errorMsgElement = document.querySelector('.error-msg');

	const names = getNames();

	newGameDrawer.classList.add('drawer--show');
	player1Element.value = names.player1;
	player2Element.value = names.player2;

	playerFormElement.addEventListener('submit', function (event) {
		event.preventDefault();
		const player1 = player1Element.value;
		const player2 = player2Element.value;

		if (player1 != '' && player2 != '') {
			newGameDrawer.classList.remove('drawer--show');
			errorMsgElement.classList.remove('error-msg--show');
			updatePlayerNames(player1, player2);
			setupDeck();
			startGame();
		} else {
			errorMsgElement.classList.add('error-msg--show');
		}
	});
}
