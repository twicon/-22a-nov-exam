import { activateAntiCheat, removeFlippedClass } from '../utils.js';
import {
	getLocalStorageState,
	setLocalStorageHighScore,
	setLocalStorageNames,
} from './local-storage.js';

const state = {
	// state hold all data that often change during the game
	score: {
		player1: 0,
		player2: 0,
	},
	names: {
		player1: '',
		player2: '',
	},
	deck: [],
	currentPlayer: 0,
	highScore: {},
};

export function addPairForPlayer(number, pairValue) {
	++state.score[`player${number}`];

	for (const card of state.deck) {
		if (card.value === pairValue) {
			card.isPair = true;
		}
	}

	// sends a custom event that the html element can respond to
	document.querySelector('.scoreboard').dispatchEvent(
		new CustomEvent('scoreboard', {
			detail: {
				score: { [`player${number}`]: state.score[`player${number}`] },
			},
		})
	);
}

export function updatePlayerNames(player1, player2) {
	state.names.player1 = player1;
	state.names.player2 = player2;
	state.score.player1 = 0;
	state.score.player2 = 0;

	document.querySelector('.scoreboard').dispatchEvent(
		new CustomEvent('scoreboard', {
			detail: { names: state.names, score: { player1: 0, player2: 0 } },
		})
	);

	setLocalStorageNames(player1, player2);
}

export function getDeck() {
	return state.deck;
}

export function getNames() {
	return { player1: state.names.player1, player2: state.names.player2 };
}

export function getScore() {
	return { player1: state.score.player1, player2: state.score.player2 };
}

export function resetDeckState(newDeck) {
	state.deck = newDeck;
}

export function setInitialState() {
	const { nameP1, nameP2, highScore } = getLocalStorageState();

	state.names.player1 = nameP1;
	state.names.player2 = nameP2;
	state.highScore = highScore;
}

export function updateCard(index, newData) {
	const cardToUpdate = state.deck[index];
	state.deck[index] = { ...cardToUpdate, ...newData };

	if (newData.isFlipped) {
		// only add front side when flipping to prevent cheating
		cardToUpdate.containerElement.appendChild(cardToUpdate.frontElement);
		cardToUpdate.cardElement.classList.add('card--flipped'); // TODO: move
	}
}

export async function flipBackCards() {
	let isFirstCard = true;

	for (const card of state.deck) {
		// check for isFlipped so we don't add timeouts that don't do anything
		if (card.isFlipped && !card.isPair) {
			await removeFlippedClass(card.cardElement, isFirstCard);
			activateAntiCheat(
				card.frontElement,
				card.containerElement,
				card.isFlipped
			);
			card.isFlipped = false;
			isFirstCard = false;
		}
	}
}

export function checkForNotFoundPairs() {
	for (const card of state.deck) {
		if (!card.isPair) return true;
	}
	return false;
}

export function changeCurrentPlayer() {
	const upcomingPlayer = (state.currentPlayer % 2) + 1;
	state.currentPlayer = upcomingPlayer;

	document.querySelector('.scoreboard').dispatchEvent(
		new CustomEvent('scoreboard', {
			detail: { currentPlayer: state.currentPlayer },
		})
	);

	return upcomingPlayer;
}

export function updateHighScoreList({ isTie, winner }) {
	if (isTie) {
		return state.highScore;
	}

	if (state.highScore[winner]) {
		++state.highScore[winner];
	} else {
		state.highScore[winner] = 1;
	}

	setLocalStorageHighScore(state.highScore);

	return state.highScore;
}
