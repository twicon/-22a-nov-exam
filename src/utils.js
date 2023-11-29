export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap values at index i and index j
	}
	return array;
}

// recursive function to find child of parent when you might have a (grand)grandchild
export function findChildOfParent(child, parent) {
	if (child === parent) return parent; // a parent can not be a child of itself

	if (child.parentElement === parent) return child; // child found, stop looking

	return findChildOfParent(child.parentElement, parent); // try looking one generation higher
}

export function removeFlippedClass(element, isFirstCard) {
	return new Promise((resolve) => {
		// promise to allow waiting inside loop
		setTimeout(
			function () {
				element.classList.remove('card--flipped');
				resolve();
			},
			isFirstCard ? 2000 : 400 // delay before first card is flipped is longer
		);
	});
}
