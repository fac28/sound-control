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
      <h1>Sound Control</h1>
      <div className="flex center">
        {state.gameControls.map((pad) => {
          return (
            <Pad
              colour={pad.colour}
              key={pad.index}
              value={pad.index}
              setState={setState}
              isAnimated={pad.isAnimated}
              isPlaying={state.isPlaying}
              playerArray={state.playerArray}
              gameArray={state.gameArray}
              state={state}
            />
          );
        })}
      </div>
      <div className="flex center gap">
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
