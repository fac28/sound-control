import audio1 from '../assets/1.mp3';
import audio2 from '../assets/2.mp3';
import audio3 from '../assets/3.mp3';
import audio4 from '../assets/4.mp3';
import audio5 from '../assets/5.mp3';
import audio6 from '../assets/6.mp3';
import audio7 from '../assets/7.mp3';
import audio8 from '../assets/8.mp3';

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
      sound: new Audio(audio3), 
      border: 'l-t'
    },
    {
      colour: 'yellow',
      index: 4,
      isAnimated: false,
      sound: new Audio(audio4), 
      border: 'r-t'
    },
    {
      colour: 'pink',
      index: 5,
      isAnimated: false,
      sound: new Audio(audio5),
      border: 'l-b'
    },
    {
      colour: 'orange',
      index: 6,
      isAnimated: false,
      sound: new Audio(audio6),
      border: 'r-b'
    },
    {
      colour: 'purple',
      index: 7,
      isAnimated: false,
      sound: new Audio(audio7),
      border: 'l-b'
    },
    {
      colour: 'black',
      index: 8,
      isAnimated: false,
      sound: new Audio(audio8),
      border: 'r-b'
    },
  ],
};
