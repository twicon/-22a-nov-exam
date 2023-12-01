import { addPairForPlayer, getDeck, updateCard } from './store/state.js';
import { findChildOfParent } from './utils.js';

// return bool changePlayer
export async function takeTurn(currentPlayer) {
	const firstCardValue = await selectCard();
	const secondCardValue = await selectCard();

	if (firstCardValue === secondCardValue) {
		addPairForPlayer(currentPlayer, firstCardValue);
		return false;
	}

	return true;
}

const selectCard = () =>
	new Promise(function (resolve) {
		const deckElement = document.querySelector('.game-board');
		const deck = getDeck();

		function flipListener(e) {
			const clickedCard = findChildOfParent(e.target, deckElement);

			// find index of card clicked
			const clickedIndex = [...deckElement.children].indexOf(clickedCard);

			// only flip cards with back side up
			if (clickedIndex !== -1 && !deck[clickedIndex].isFlipped) {
				updateCard(clickedIndex, { isFlipped: true });

				// clean up old listener as new listener is added every time function runs
				deckElement.removeEventListener('click', flipListener);
				resolve(deck[clickedIndex].value); // return card value to check for pair
			}
		}

		deckElement.addEventListener('click', flipListener);
	});
