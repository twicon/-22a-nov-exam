export function openGameOver() {
	const backdrop = document.querySelector('.backdrop');
	const gameOver = document.querySelector('.game-over');

	backdrop.style.display = 'flex';
	gameOver.style.display = 'flex';

	// add button with click event listener
	// on click:
	// 	stop showing game over screen
	// 	open new game screen
}
