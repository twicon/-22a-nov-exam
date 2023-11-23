import {
	createCardsObject,
	createDeck,
	paintCardsOnBoard,
} from './src/deck.js';

const deckBlueprint = createDeck();
const cardsObject = createCardsObject(deckBlueprint);

paintCardsOnBoard(cardsObject);
