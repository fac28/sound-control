import { gameOver } from '../utils/gameOver';

const ResetButton = ({ control, setState }) => {
  return (
    <button type="button" className="button" onClick={() => gameOver(setState)}>
      Reset
    </button>
  );
};

export default ResetButton;
