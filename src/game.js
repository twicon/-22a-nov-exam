import { createCardsObject, createDeck, paintCardsOnBoard } from './deck.js';
import { setupEventListeners } from './eventListeners.js';

export function setupGame() {
	const deck = setupDeck();
	paintCardsOnBoard(deck);
	startGame(deck);
}

function setupDeck() {
	const deckBlueprint = createDeck();
	return createCardsObject(deckBlueprint);
}

function startGame(deck) {
	setupEventListeners(deck);
	console.log('game started', { deck });
}
