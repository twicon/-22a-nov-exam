import { openGameOver } from './game-over.js';
import {
	changeCurrentPlayer,
	checkForNotFoundPairs,
	flipBackCards,
} from './store/state.js';
import { takeTurn } from './turn.js';

export async function startGame() {
	const gameBoardElement = document.querySelector('.game-board');
	
	let gameIsRunning = true;
	let currentPlayer = changeCurrentPlayer();

	gameBoardElement.classList.add('game-board--show');

	while (gameIsRunning) {
		const changePlayer = await takeTurn(currentPlayer);

		await flipBackCards(); // also contains a delay so players have time to memorize the cards

		if (changePlayer) currentPlayer = changeCurrentPlayer();
		// swap between 1 and 2 if no pair

		gameIsRunning = checkForNotFoundPairs(); // stop playing if no pairs are left to find
	}

	gameBoardElement.classList.remove('game-board--show');
	openGameOver();
}
