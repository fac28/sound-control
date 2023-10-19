import './App.css';
import Pad from './components/Pad';
import ControlButton from './components/ControlButton';
import { useState } from 'react';
import { initialState } from './utils/global';
import PlayButton from './components/PlayButton';
import ResetButton from './components/ResetButton';

function App() {
  const [state, setState] = useState(initialState);

  return (
    <>
      <h1 className="glow">Sound Control</h1>
      <div className="flex center width margin-top">
        {state.gameControls.map((pad) => {
          return (
            <Pad
              colour={pad.colour}
              key={pad.index}
              value={pad.index}
              setState={setState}
              isAnimated={pad.isAnimated}
              border={pad.border}
              isPlaying={state.isPlaying}
              playerArray={state.playerArray}
              gameArray={state.gameArray}
              gameOver={state.gameOver}
              state={state}
            />
          );
        })}
      </div>
      {state.gameOver && (
        <div className="flex center column">
          <p className="glow small-font">Game Over</p>
          <p className="glow small-font">Score: {state.gameArray.length - 1}</p>
        </div>
      )}

      <div className="flex center margin-top">
        {!state.isPlaying ? (
          <PlayButton gameArray={state.gameArray} gameControls={state.gameControls} setState={setState} state={state} />
        ) : (
          <ResetButton setState={setState} />
        )}
      </div>
    </>
  );
}

export default App;
