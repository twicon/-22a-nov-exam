function createDeck() {
    const baseImagePaths = [
        {value: 1, img: 'images/bild1.webp'},
        {value: 2, img: 'images/bild2.webp'},
        {value: 3, img: 'images/bild3.webp'},
        {value: 4, img: 'images/bild4.webp'},
        {value: 5, img: 'images/bild5.webp'},
        {value: 6, img: 'images/bild6.webp'}
    ];

    let deck = baseImagePaths.concat(baseImagePaths);

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

function createCardsObject(boardBlueprint) {
	const domRefs = [];

	for (const card of boardBlueprint) {
		const cardFront = document.createElement('p');
		cardFront.classList.add('card__front');
		cardFront.appendChild(document.createTextNode(card.value));

		const cardElement = document.createElement('article');
		cardElement.classList.add('card');
		cardElement.appendChild(cardFront);

		domRefs.push({ cardElement, isPair: false, isFlipped: false });
	}

	return domRefs;
}

function paintCardsOnBoard(cardsObject) {
	for (const card of cardsObject) {
		main.appendChild(card.cardElement);
	}
}
const deckBlueprint = createDeck();
const cardsObject = createCardsObject(deckBlueprint);

paintCardsOnBoard(cardsObject);

cardsObject[0].cardElement.classList.add('card__flipped');
