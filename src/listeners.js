export function setupScoreboardListener() {
	const scoreElement = document.querySelector('.scoreboard');

	// if score in state changes the html elements will update to reflect this
	scoreElement.addEventListener('scoreboard', function (e) {
		console.log({ scoreboardUpdate: e.detail });
		if (!isNaN(e.detail.score?.player1)) {
			// only update elements if needed
			scoreElement.querySelector('.scoreboard__score-p1').innerText =
				e.detail.score.player1;
		}
		if (!isNaN(e.detail.score?.player2)) {
			scoreElement.querySelector('.scoreboard__score-p2').innerText =
				e.detail.score.player2;
		}

		if (e.detail.names?.player1) {
			scoreElement.querySelector('.scoreboard__name-p1').innerText =
				e.detail.names.player1;
		}
		if (e.detail.names?.player1) {
			scoreElement.querySelector('.scoreboard__name-p2').innerText =
				e.detail.names.player2;
		}
	});
}
