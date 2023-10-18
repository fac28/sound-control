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
      border: 'l-t'
    },
    {
      colour: 'blue',
      index: 2,
      isAnimated: false,
      sound: new Audio(audio2), 
      border: 'r-t'
    },
    {
      colour: 'green',
      index: 3,
      isAnimated: false,
      sound: new Audio(audio2), 
      border: 'l-t'
    },
    {
      colour: 'yellow',
      index: 4,
      isAnimated: false,
      sound: new Audio(audio2), 
      border: 'r-t'
    },
    {
      colour: 'pink',
      index: 5,
      isAnimated: false,
      sound: new Audio(audio1),
      border: 'l-b'
    },
    {
      colour: 'orange',
      index: 6,
      isAnimated: false,
      sound: new Audio(audio1),
      border: 'r-b'
    },
    {
      colour: 'purple',
      index: 7,
      isAnimated: false,
      sound: new Audio(audio1),
      border: 'l-b'
    },
    {
      colour: 'black',
      index: 8,
      isAnimated: false,
      sound: new Audio(audio1),
      border: 'r-b'
    },
  ],
};
