import { openGameOptions } from './new-game.js';
import { getNames, getScore } from './store/state.js';

export function openGameOver() {
	const backdrop = document.querySelector('.backdrop');
	const gameOverElement = document.querySelector('.game-over');
	const msgElement = gameOverElement.querySelector('.game-over__msg');
	const newGameBtnElement =
		gameOverElement.querySelector('.game-over__button');

	backdrop.style.display = 'flex';
	gameOverElement.style.display = 'flex';

	msgElement.innerText = createWinMessage();

	newGameBtnElement.addEventListener(
		'click',
		function () {
			backdrop.style.display = 'flex';
			gameOverElement.style.display = 'flex';
			openGameOptions();
		},
		{ once: true }
	);
}

function createWinMessage() {
	const names = getNames();
	const score = getScore();

	if (score.player1 === score.player2) {
		return "It's a tie!";
	}

	const winner = score.player1 > score.player2 ? 'player1' : 'player2';

	return `With ${score[winner]} points, ${names[
		winner
	].toUpperCase()} is the winner!`;
}
