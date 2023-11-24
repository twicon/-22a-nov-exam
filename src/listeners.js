import { incrementScoreForPlayer } from './store/state.js';

export function setupScoreListeners() {
	const scoreElement = document.querySelector('.score');

	// if score in state changes the html elements will update to reflect this
	scoreElement.addEventListener('updateScore', function (e) {
		scoreElement.querySelector('.score__p1').innerText = e.detail.player1;
		scoreElement.querySelector('.score__p2').innerText = e.detail.player2;
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
