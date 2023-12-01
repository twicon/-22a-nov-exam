import { openGameOptions } from './new-game.js';
import { getNames, getScore, updateHighScoreList } from './store/state.js';

export function openGameOver() {
	const backdrop = document.querySelector('.backdrop');
	const gameOverElement = document.querySelector('.game-over');
	const msgElement = gameOverElement.querySelector('.game-over__msg');
	const newGameBtnElement =
		gameOverElement.querySelector('.game-over__button');

	backdrop.style.display = 'flex';
	gameOverElement.style.display = 'flex';

	const winnerData = determineWinner();
	msgElement.innerText = createWinMessage(winnerData);

	const highScore = updateHighScoreList(winnerData);

	createHighScoreList(highScore);

	newGameBtnElement.addEventListener(
		'click',
		function () {
			gameOverElement.style.display = 'none';
			openGameOptions();
		},
		{ once: true }
	);
}

function determineWinner() {
	const names = getNames();
	const score = getScore();

	if (score.player1 === score.player2) {
		return { isTie: true };
	}

	const winner = score.player1 > score.player2 ? 'player1' : 'player2';

	return { isTie: false, winner: names[winner], score: score[winner] };
}

function createWinMessage({ isTie, winner, score }) {
	if (isTie) {
		return "It's a tie!";
	}

	return `With ${score} points, ${winner.toUpperCase()} is the winner!`;
}

function createHighScoreList(highScore) {
	const highScoreElement = document.querySelector('.high-score');

	const highScoreArray = Object.keys(highScore).sort(
		(a, b) => highScore[b] - highScore[a]
	);
	console.log(highScoreArray);

	for (const player of highScoreArray) {
		const li = document.createElement('li');
		li.classList.add('high-score__item');
		li.innerText = `${player} - ${highScore[player]} wins`;
		highScoreElement.appendChild(li);
	}
}
