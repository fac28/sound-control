import { animateGameArray } from "./animateGameArray";

export const startNewRound = (gameArray, state, setState) => {
    if (state.isPlaying) return;
  
    const randomIndex = Math.floor(Math.random() * state.gameControls.length) +1;
    
    const newGameArray = [...state.gameArray, randomIndex]
  
    setState((prevState) => ({
      ...prevState,
      gameArray: newGameArray,
      isPlaying: true, // Game is in progress
    }));
    
    animateGameArray(newGameArray, setState)
  }