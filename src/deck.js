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
        cardFront.src = `images/${card.value}.jpg`; // Set the source of the front image

        // Create the back side of the card as an <img> element
        const cardBack = document.createElement('img');
        cardBack.classList.add('card__back');
        cardBack.src = 'images\card.webp'; // Set the source of the back image

        // Create the card element that will contain both front and back
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);

        // Add event listener for flip logic
        cardElement.addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });

        domRefs.push({ cardElement, isPair: false, isFlipped: false });
    }

    return domRefs;
}

export function paintCardsOnBoard(cardsObject) {
	for (const card of cardsObject) {
		main.appendChild(card.cardElement);
	}
}
