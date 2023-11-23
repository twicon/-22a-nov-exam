let flipCount = 0;

export function setupEventListeners(deck) {
	for (const { cardElement } of deck) {
		addFlipHandler(cardElement);
	}
}

function addFlipHandler(cardElement) {
	cardElement.addEventListener('click', function () {
		if (cardElement.isFlipped || flipCount === 2) return;

		cardElement.classList.add('card--flipped');
		++flipCount;
	});
}
