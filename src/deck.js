import { frontImagePaths } from './assets.js';

export function createDeck() {
	const deck = frontImagePaths.concat(frontImagePaths);

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
		// Create the front side of the card as an <img> element
		const cardFront = document.createElement('img');
		cardFront.classList.add('card__front');
		cardFront.src = card.img; // Set the source of the front image

		// Create the back side of the card as an <img> element
		const cardBack = document.createElement('img');
		cardBack.classList.add('card__back');
		cardBack.src = 'images/card.webp'; // Set the source of the back image

		// Create a container that flips between front and back side of card
		const cardContainer = document.createElement('div');
		cardContainer.classList.add('card__container');
		cardContainer.appendChild(cardFront);
		cardContainer.appendChild(cardBack);

		// Create the card element that will contain both front and back
		const cardElement = document.createElement('div');
		cardElement.classList.add('card');
		cardElement.appendChild(cardContainer);

		domRefs.push({ cardElement, isPair: false, isFlipped: false });
	}

	return domRefs;
}

export function paintCardsOnBoard(cardsObject) {
	for (const card of cardsObject) {
		main.appendChild(card.cardElement);
	}
}
