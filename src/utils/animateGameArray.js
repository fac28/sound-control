import { handleAnimation } from './handleAnimation';

export const animateGameArray = (gameArray, setState) => {
  let index = 0;

  const interval = setInterval(() => {
    if (index < gameArray.length) {
      // Animate the pad with the current colour
      handleAnimation(setState, gameArray[index]);
      index++;
    } else {
      // The entire gameArray has been animated
      clearInterval(interval);
    }
  }, 500);
};


