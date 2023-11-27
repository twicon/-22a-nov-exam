import { getDeck, incrementScoreForPlayer, updateDeck } from './store/state.js';

export async function takeTurn(currentPlayer) {
	console.log('takeTurn', { currentPlayer });

	const firstCardValue = await selectCard();
	const secondCardValue = await selectCard();
	console.log({ firstCardValue, secondCardValue });

	if (firstCardValue === secondCardValue) {
		incrementScoreForPlayer(currentPlayer); // TODO: add logic for pairs
	}
}

const selectCard = () =>
	new Promise(function (resolve) {
		const deckElement = document.querySelector('main');
		const deck = getDeck();
		console.log({ deck });

		function flipListener(e) {
			const clickedCard = e.target.parentElement.parentElement; // TODO: make dynamic

			// find index of card clicked
			const clickedIndex = [...deckElement.children].indexOf(clickedCard);
			console.log({ clickedCard, e, deckElement, clickedIndex });

			// only flip cards with back side up
			if (clickedIndex !== -1 && !deck[clickedIndex].isFlipped) {
				updateDeck(clickedIndex, { isFlipped: true });
				deck[clickedIndex].cardElement.classList.add('card--flipped'); // TODO: move

				// clean up old listener as new listener is added every time function runs
				deckElement.removeEventListener('click', flipListener);
				resolve(deck[clickedIndex].value); // return card value to check for pair
			}
		}

		deckElement.addEventListener('click', flipListener);
	});
