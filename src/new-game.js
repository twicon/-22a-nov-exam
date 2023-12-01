import { setupDeck } from './deck.js';
import { startGame } from './game.js';
import { getNames, updatePlayerNames } from './store/state.js';

export function openGameOptions() {
	const newGameDrawer = document.querySelector('.new-game');
	const playerFormElement = document.querySelector('.new-game__form');
	const player1Element = playerFormElement.querySelector('#player1');
	const player2Element = playerFormElement.querySelector('#player2');
	const pairsElement = playerFormElement.querySelector('#pairs');
	const errorMsgElement = document.querySelector('.error-msg');

	const savedNames = getNames();

	newGameDrawer.classList.add('drawer--show');
	player1Element.value = savedNames.player1;
	player2Element.value = savedNames.player2;

	function newGameHandler(event) {
		event.preventDefault();
		const player1 = player1Element.value;
		const player2 = player2Element.value;

		if (player1 != '' && player2 != '') {
			playerFormElement.removeEventListener('submit', newGameHandler);
			newGameDrawer.classList.remove('drawer--show');
			errorMsgElement.classList.remove('error-msg--show');
			
			const pairs = parseInt(pairsElement.value);
			
			updatePlayerNames(player1, player2);
			setupDeck(pairs);
			startGame();
		} else {
			errorMsgElement.classList.add('error-msg--show');
		}
	}

	playerFormElement.addEventListener('submit', newGameHandler);
}
