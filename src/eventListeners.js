export function setupEventListeners(deckData) {
	for (const { cardElement } of deckData) {
		cardElement.addEventListener('click', function () {
			cardElement.classList.toggle('card--flipped');
		});
	}
}
