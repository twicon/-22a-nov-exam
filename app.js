import { setupDeck } from './src/deck.js';
import { setupScoreListeners } from './src/listeners.js';
import { startGame } from './src/game.js';

setupDeck();
setupScoreListeners();
startGame();

document.querySelector('#playerForm').addEventListener('submit', function(event){
    event.preventDefault();
    var player1 = document.querySelector('#player1').value;
    var player2 = document.querySelector('#player2').value;

    console.log("Player one: " + player1);
    console.log("Player two: " + player2);

    if (player1 != '' && player2 != '') {
        console.log('START GAME');
    } else {
        console.log('Please enter names for both players');
    }
})