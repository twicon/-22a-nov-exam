const state = { // state hold all data that often change during the game
	score: {
		player1: 0,
		player2: 0,
	},
};

export function incrementScoreForPlayer(number) {
	++state.score[`player${number}`];

	// sends a custom event that the html element can respond to
	document.querySelector('.score').dispatchEvent(
		new CustomEvent('updateScore', {
			detail: state.score,
		})
	);
}
