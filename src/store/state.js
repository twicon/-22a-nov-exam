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

export function incrementScoreForPlayer(number) {
	++state.score[`player${number}`];

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

export function updateDeck(index, newData) {
	state.deck[index] = { ...state.deck[index], ...newData };
}

export async function flipBackCards() {
	let firstCard = true;

	for (const card of state.deck) {
		// check for isFlipped so we don't add timeouts that don't do anything
		if (card.isFlipped && !card.isPair) {
			await removeFlippedClass(card.cardElement, firstCard);
			card.isFlipped = false;
			firstCard = false;
		}
	}
}

function removeFlippedClass(element, firstCard) {
	return new Promise((resolve) => {
		// promise to allow waiting inside loop
		setTimeout(
			function () {
				element.classList.remove('card--flipped');
				resolve();
			},
			firstCard ? 2000 : 400 // delay before first card is flipped is longer
		);
	});
}
