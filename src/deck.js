import { baseImagePaths } from './assets.js';

export function createDeck() {
	const deck = baseImagePaths.concat(baseImagePaths);

	return shuffle(deck);
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Byt plats på elementen
	}
	return array;
}

const main = document.querySelector('main');

export function createCardsObject(boardBlueprint) {
	const domRefs = [];

	for (const card of boardBlueprint) {
		const cardFront = document.createElement('p');
		cardFront.classList.add('card__front');
		cardFront.appendChild(document.createTextNode(card.value));

		const cardElement = document.createElement('article');
		cardElement.classList.add('card');
		cardElement.appendChild(cardFront);

		domRefs.push({ cardElement, isPair: false, isFlipped: false });
	}

	return domRefs;
}

export function paintCardsOnBoard(cardsObject) {
	for (const card of cardsObject) {
		main.appendChild(card.cardElement);
	}
}
