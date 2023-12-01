export function getLocalStorageState() {
	const nameP1 = localStorage.getItem('namep1') || '';
	const nameP2 = localStorage.getItem('namep2') || '';

	const highScore = localStorage.getItem('highscore')
		? JSON.parse(localStorage.getItem('highscore'))
		: {};

	return { nameP1, nameP2, highScore };
}

export function setLocalStorageNames(player1, player2) {
	localStorage.setItem('namep1', player1);
	localStorage.setItem('namep2', player2);
}

export function setLocalStorageHighScore(highScore) {
	localStorage.setItem('highscore', JSON.stringify(highScore));
}
