import { removeFlippedClass } from '../utils.js';

const state = {
	// state hold all data that often change during the game
	score: {
		player1: 0,
		player2: 0,
	},
	names: {
		player1: '',
		player2: '',
	},
	deck: [],
};

export function addPairForPlayer(number, pairValue) {
	++state.score[`player${number}`];

	for (const card of state.deck) {
		if (card.value === pairValue) {
			card.isPair = true;
		}
	}

	// sends a custom event that the html element can respond to
	document.querySelector('.scoreboard').dispatchEvent(
		new CustomEvent('scoreboard', {
			detail: {
				score: { [`player${number}`]: state.score[`player${number}`] },
			},
		})
	);
}

export function updatePlayerNames(player1, player2) {
	state.names.player1 = player1;
	state.names.player2 = player2;

	document.querySelector('.scoreboard').dispatchEvent(
		new CustomEvent('scoreboard', {
			detail: { names: state.names },
		})
	);
}

export function getDeck() {
	return state.deck;
}

export function resetDeckState(newDeck) {
	state.deck = newDeck;
}

export function updateCard(index, newData) {
	state.deck[index] = { ...state.deck[index], ...newData };

	if (newData.isFlipped) {
		state.deck[index].cardElement.classList.add('card--flipped'); // TODO: move
	}
}

export async function flipBackCards() {
	let isFirstCard = true;

	for (const card of state.deck) {
		// check for isFlipped so we don't add timeouts that don't do anything
		if (card.isFlipped && !card.isPair) {
			await removeFlippedClass(card.cardElement, isFirstCard);
			card.isFlipped = false;
			isFirstCard = false;
		}
	}
}

export function checkForNotFoundPairs() {
	for (const card of state.deck) {
		if (!card.isPair) return true;
	}
	return false;
}
