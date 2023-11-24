import { setupFlipListeners } from './listeners.js';
import { backImagePaths, frontImagePaths } from './store/images.js';
import { shuffleArray } from './utils.js';

export function setupDeck() {
	// create array of cards with pairs in random order
	const deckBlueprint = createDeckBlueprint();

	// create HTML elements for the cards
	const cardsObject = createCardsObject(deckBlueprint);

	// show the cards in the browser
	paintCardsOnBoard(cardsObject);

	// add event listeners to the cards
	setupFlipListeners(cardsObject);

	// TODO: add cardsObject to state
}

function createDeckBlueprint() {
	const deck = frontImagePaths.concat(frontImagePaths);

	return shuffleArray(deck);
}

function createCardsObject(deckBlueprint) {
	const cardsObject = [];

	for (const card of deckBlueprint) {
		// Create the front and back of the card as an <img> elements
		const cardFront = document.createElement('img');
		cardFront.classList.add('card__front');
		cardFront.src = card.img; // Set the source of the front image

		const cardBack = document.createElement('img');
		cardBack.classList.add('card__back');
		cardBack.src = backImagePaths[0]; // Set the source of the back image

		// Create a container that we can flip to display either front or back side
		const cardContainer = document.createElement('div');
		cardContainer.classList.add('card__container');
		cardContainer.appendChild(cardFront);
		cardContainer.appendChild(cardBack);

		// Create the card element that will be used to position the cards
		const cardElement = document.createElement('article');
		cardElement.classList.add('card');
		cardElement.appendChild(cardContainer);

		cardsObject.push({ cardElement, isPair: false, isFlipped: false });
	}

	return cardsObject;
}

export function paintCardsOnBoard(cardsObject) {
	const gameBoard = document.querySelector('main');

	for (const card of cardsObject) {
		gameBoard.appendChild(card.cardElement);
	}
}
