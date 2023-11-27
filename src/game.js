import { takeTurn } from './turn.js';

export async function startGame() {
	// placeholder function
	console.log('game started');
	let gameIsRunning = true;
	let currentPlayer = 1;
	let turnsCompleted = 0;

	while (gameIsRunning) {
		const changePlayer = await takeTurn(currentPlayer);

		if (changePlayer) currentPlayer = (currentPlayer % 2) + 1; // alternate between 1 and 2
		if (++turnsCompleted === 2) gameIsRunning = false;
	}
	console.log('gameOver');
}
