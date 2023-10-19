import { startNewRound } from '../utils/startNewRound';

const PlayButton = ({setState, state }) => {
  return (
    <button type="button" className="button" onClick={() => startNewRound(state.gameArray, state, setState)}>
      Play
    </button>
  );
};

export default PlayButton;
