import './App.css';
import Pad from './components/Pad';
import ControlButton from './components/ControlButton';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    playerArray: [],
    gameArray: [],
    isPlaying: false,
    gameControls: [
      {
        colour: 'red',
        index: 1,
        isAnimated: false,
      },
      {
        colour: 'blue',
        index: 2,
        isAnimated: false,
      },
      {
        colour: 'green',
        index: 3,
        isAnimated: false,
      },
      {
        colour: 'yellow',
        index: 4,
        isAnimated: false,
      },
    ],
  });

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
        <ControlButton
          control={'play'}
          gameArray={state.gameArray}
          gameControls={state.gameControls}
          setState={setState}
          state={state}
        />
        <ControlButton control={'pause'} />
      </div>
    </>
  );
}

export default App;
