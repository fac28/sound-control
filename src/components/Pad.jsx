import { handleAnimation } from '../utils/handleAnimation';
import { compareArrays } from '../utils/compareArrays';
import { startNewRound } from '../utils/startNewRound';

const Pad = ({ colour, setState, value, isAnimated, playerArray, gameArray, state, border }) => {
  const clickHandler = (event) => {
    const newPlayerArray = [...playerArray, +event.target.value];

    setState((prevState) => ({
      ...prevState,
      playerArray: newPlayerArray,
    }));

    handleAnimation(setState, value);

    if (compareArrays(newPlayerArray, gameArray)) {
      // If the player's guess is correct, update the correctGuesses count.
      const correctGuesses = newPlayerArray.length;

      if (correctGuesses === gameArray.length) {
        // If the correct guesses equal the length of the gameArray, start a new round.
        startNewRound(gameArray, state, setState);
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        gameOver: true,
      }));

  
    }
  };
  return (
    <button
      type="button"
      className={`pad ${colour} ${border} ${isAnimated ? 'element-animate' : ''}`}
      value={value}
      onClick={clickHandler}
    ></button>
  );
  
};

export default Pad;
