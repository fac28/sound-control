import { animateGameArray } from './animateGameArray';

export const startNewRound = (gameArray, state, setState) => {
  const randomIndex = Math.floor(Math.random() * state.gameControls.length) + 1;

  setTimeout(() => {
    const newGameArray = [...state.gameArray, randomIndex];

    setState((prevState) => ({
      ...prevState,
      gameArray: newGameArray,
      isPlaying: true,
      playerArray: [],
    }));

    animateGameArray(newGameArray, setState);
  }, 750);
};
