export function shuffleArray(array) {
	// Return a new shuffled copy while leaving the original intact
	const newAry = [...array];

	// Fisher–Yates shuffle
	for (let i = newAry.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		// Swap values at index i and index j
		[newAry[i], newAry[j]] = [newAry[j], newAry[i]];
	}
	return newAry;
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
