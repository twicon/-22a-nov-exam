import { getDeck } from './store/state.js';

export function takeTurn(currentPlayer) {
	const deck = getDeck();
	console.log('takeTurn', { currentPlayer, deck });

	// setupFlipListeners etc.
}
