import { setupDeck } from './src/deck.js';
import { setupScoreListeners } from './src/listeners.js';
import { startGame } from './src/game.js';

setupDeck();
setupScoreListeners();
startGame();
