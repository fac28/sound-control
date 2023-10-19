import { handleAnimation } from './handleAnimation';

export const animateGameArray = (gameArray, setState) => {
  let index = 0;
  let delay = 250; // Initial delay

  const interval = setInterval(() => {
    if (index < gameArray.length) {
      // Animate the pad with the current colour after a delay
      setTimeout(() => {
        handleAnimation(setState, gameArray[index]);
        index++;
      }, delay);

      // Set a longer delay for subsequent animations
      delay = 50;
    } else {
      // The entire gameArray has been animated
      clearInterval(interval);
    }
  }, 1000); // The interval checks every 1000ms
};
