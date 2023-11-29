import { openGameOver } from './game-over.js';
import { checkForNotFoundPairs, flipBackCards } from './store/state.js';
import { takeTurn } from './turn.js';

export async function startGame() {
	// placeholder function
	console.log('game started');
	let gameIsRunning = true;
	let currentPlayer = 1;
	// let turnsCompleted = 0;

	document.querySelector('.game-board').classList.add('game-board--show');

	while (gameIsRunning) {
		const changePlayer = await takeTurn(currentPlayer);

		await flipBackCards(); // also contains a delay so players have time to memorize the cards

		if (changePlayer) currentPlayer = (currentPlayer % 2) + 1; // swap between 1 and 2 if no pair

		gameIsRunning = checkForNotFoundPairs(); // stop playing if no pairs are left to find
	}

	console.log('gameOver'); // check who wins
	openGameOver();
}
