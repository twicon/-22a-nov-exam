import { backImagePaths, frontImagePaths } from './store/images.js';
import { resetDeckState } from './store/state.js';
import { shuffleArray } from './utils.js';

export function setupDeck() {
	// create array of cards with pairs in random order
	const deckBlueprint = createDeckBlueprint();

	// create HTML elements for the cards
	const deck = createDeck(deckBlueprint);
	console.log('setupDeck', deck);

	paintCardsOnBoard(deck); // show the cards in the browser

	resetDeckState(deck); // add new deck to state
}

function createDeckBlueprint(frontImgPaths, backImg) {
	// 1. Lägg till values på images. så 'images/bild1.webp' blir {value: 1, img: 'images/bild2.webp'}

	const deck = frontImagePaths.concat(frontImagePaths);

	return shuffleArray(deck);
}

function createDeck(deckBlueprint) {
	const deck = [];

	for (const card of deckBlueprint) {
		// Create the front and back of the card as an <img> elements
		const cardFront = document.createElement('img');
		cardFront.classList.add('card__front');
		cardFront.src = card; // Set the source of the front image

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

		deck.push({
			cardElement,
			value: card.value,
			isPair: false,
			isFlipped: false,
		});
	}

	return deck;
}

export function paintCardsOnBoard(deck) {
	const gameBoard = document.querySelector('main');

	for (const card of deck) {
		gameBoard.appendChild(card.cardElement);
	}
}
