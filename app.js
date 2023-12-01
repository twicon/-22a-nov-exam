import { setupScoreboardListener } from './src/listeners.js';
import { openGameOptions } from './src/new-game.js';
import { setInitialState } from './src/store/state.js';

setInitialState();
setupScoreboardListener();
openGameOptions();
