export function openGameOver() {
	const backdrop = document.querySelector('.backdrop');
	const gameOver = document.querySelector('.game-over');
	const newGameButton = document.querySelector('.newGameButton');

	backdrop.style.display = 'none';
	gameOver.style.display = 'none';

	newGameButton.addEventListener("click", function() { }, { once: true });
}
