let flipCount = 0;

export function setupEventListeners(deck) {
	for (const card of deck) {
		addFlipHandler(card);
	}
}

function addFlipHandler(card) {
	card.cardElement.addEventListener('click', function () {
		if (card.isFlipped || flipCount === 2) return;

		card.cardElement.classList.add('card--flipped');
		card.isFlipped = true;
		++flipCount;
	});
}
