import { backImagePaths, frontImagePaths } from './store/images.js';
import { resetDeckState } from './store/state.js';
import { randomTranslate, shuffleArray } from './utils.js';

export function setupDeck(pairs = 12) {
	// create array of cards with pairs in random order
	const deckBlueprint = createDeckBlueprint(frontImagePaths, 12);

	// create HTML elements for the cards
	const deck = createDeck(deckBlueprint, backImagePaths[0]);

	paintCardsOnBoard(deck); // show the cards in the browser

	resetDeckState(deck); // add new deck to state
}

function createDeckBlueprint(frontImagePaths, pairs) {
	const randomImages = shuffleArray(frontImagePaths).slice(0, pairs);

	const imagesWithValues = randomImages.map(function (image, i) {
		return { value: i + 1, image };
	});

	const deck = imagesWithValues.concat(imagesWithValues);

	return shuffleArray(deck);
}

function createDeck(deckBlueprint, backImagePath) {
	const deck = [];

	for (const card of deckBlueprint) {
		// Create the front and back of the card as an <img> elements
		const cardFront = document.createElement('img');
		cardFront.classList.add('card__front');
		cardFront.src = card.image; // Set the source of the front image

		const cardBack = document.createElement('img');
		cardBack.classList.add('card__back');
		cardBack.src = backImagePath; // Set the source of the back image

		// Create a container that we can flip to display either front or back side
		const cardContainer = document.createElement('div');
		cardContainer.classList.add('card__container');
		cardContainer.appendChild(cardBack); // only set back to prevent cheating

		// Create the card element that will be used to position the cards
		const cardElement = document.createElement('article');
		cardElement.classList.add('card');
		cardElement.appendChild(cardContainer);

		deck.push({
			cardElement,
			frontElement: cardFront,
			containerElement: cardContainer,
			value: card.value,
			isPair: false,
			isFlipped: false,
		});
	}

	return deck;
}

export function paintCardsOnBoard(deck) {
	const gameBoard = document.querySelector('.game-board');

	gameBoard.replaceChildren(); // clear old cards

	for (const card of deck) {
		card.cardElement.style.transform = randomTranslate();
		gameBoard.appendChild(card.cardElement);
	}
}
