import { incrementScoreForPlayer } from './store/state.js';

export function setupScoreboardListener() {
	const scoreElement = document.querySelector('.scoreboard');

	// if score in state changes the html elements will update to reflect this
	scoreElement.addEventListener('scoreboard', function (e) {
		console.log({scoreboardUpdate: e.detail})
		if (e.detail.score?.player1) { // only update elements if needed
			scoreElement.querySelector('.scoreboard__score-p1').innerText =
				e.detail.score.player1;
		}
		if (e.detail.score?.player2) {
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

export function setupFlipListeners(deck) {
	// placeholder, needs logic to determine if two cards are a pair and what players is flipping
	let flipCount = 0; // move somewhere else

	for (const card of deck) {
		card.cardElement.addEventListener('click', function () {
			// TODO: get cards from state instead of arg
			if (card.isFlipped || flipCount === 2) return;

			card.cardElement.classList.add('card--flipped');
			card.isFlipped = true;

			incrementScoreForPlayer(1);
			++flipCount;
		});
	}
}
