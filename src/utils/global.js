import audio1 from '../assets/1.mp3';
import audio2 from '../assets/2.mp3';

export const initialState = {
  playerArray: [],
  gameArray: [],
  isPlaying: false,
  gameOver: false,
  gameControls: [
    {
      colour: 'red',
      index: 1,
      isAnimated: false,
      sound: new Audio(audio1), 
    },
    {
      colour: 'blue',
      index: 2,
      isAnimated: false,
      sound: new Audio(audio2), 
    },
    {
      colour: 'green',
      index: 3,
      isAnimated: false,
      sound: new Audio(audio2), 
    },
    {
      colour: 'yellow',
      index: 4,
      isAnimated: false,
      sound: new Audio(audio2), 
    },
  ],
};
