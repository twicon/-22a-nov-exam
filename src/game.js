import { createCardsObject, createDeck, paintCardsOnBoard } from './deck.js';
import { setupEventListeners } from './eventListeners.js';

export function setupGame() {
	const deckData = setupDeck();
	paintCardsOnBoard(deckData);
	startGame(deckData);
}

function setupDeck() {
	const deck = createDeck();
	return createCardsObject(deck);
}

function startGame(deckData) {
	setupEventListeners(deckData);
	console.log('game started', { deckData });
}
