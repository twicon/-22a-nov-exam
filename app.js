const main = document.querySelector('main');

function createCardsObject(boardBlueprint) {
	const domRefs = [];

	for (const card of boardBlueprint) {
		const cardFront = document.createElement('p');
		cardFront.classList.add('card__front');
		cardFront.appendChild(document.createTextNode(card));

		const cardElement = document.createElement('article');
		cardElement.classList.add('card');
		cardElement.appendChild(cardFront);

		domRefs.push({ cardElement, isPair: false, isFlipped: false });
	}

	return domRefs;
}

function paintCardsOnBoard(cardsObject) {
	for (const card of cardsObject) {
		main.appendChild(card.cardElement);
	}
}

const cardsObject = createCardsObject([1, 3, 5, 3, 7, 11, 11, 7]);

paintCardsOnBoard(cardsObject);

cardsObject[0].cardElement.classList.add('card__flipped');
