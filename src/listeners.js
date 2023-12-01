export function setupScoreboardListener() {
	const scoreElement = document.querySelector('.scoreboard');

	// if score in state changes the html elements will update to reflect this
	scoreElement.addEventListener('scoreboard', function (e) {
		const scoreP1 = scoreElement.querySelector('.scoreboard__score-p1');
		const scoreP2 = scoreElement.querySelector('.scoreboard__score-p2');
		const nameP1 = scoreElement.querySelector('.scoreboard__name-p1');
		const nameP2 = scoreElement.querySelector('.scoreboard__name-p2');
		console.log({ scoreboardUpdate: e.detail });

		if (!isNaN(e.detail.score?.player1)) {
			// only update elements if needed
			scoreP1.innerText = e.detail.score.player1;
		}
		if (!isNaN(e.detail.score?.player2)) {
			scoreP2.innerText = e.detail.score.player2;
		}

		if (e.detail.names?.player1) {
			nameP1.innerText = e.detail.names.player1;
		}
		if (e.detail.names?.player1) {
			nameP2.innerText = e.detail.names.player2;
		}

		if (e.detail.currentPlayer) {
			if (e.detail.currentPlayer === 1) {
				nameP1.classList.add('scoreboard__name--current-player');
				nameP2.classList.remove('scoreboard__name--current-player');
			} else {
				nameP2.classList.add('scoreboard__name--current-player');
				nameP1.classList.remove('scoreboard__name--current-player');
			}
		}
	});
}
