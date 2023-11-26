import { takeTurn } from './turn.js';

export function startGame() {
	// placeholder function
	console.log('game started');
	let gameIsRunning = true;
	let currentPlayer = 1;
	let turnsCompleted = 0;

	while (gameIsRunning) {
		takeTurn(currentPlayer);

		currentPlayer = (currentPlayer % 2) + 1; // alternate between 1 and 2
		if (++turnsCompleted === 4) gameIsRunning = false;
	}
}
