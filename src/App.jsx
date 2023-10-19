import './App.css';
import Pad from './components/Pad';
import { useState } from 'react';
import { initialState } from './utils/global';
import PlayButton from './components/PlayButton';
import ResetButton from './components/ResetButton';

import { pauseBackgroundSong, playBackgroundSong } from './utils/backgroundSong';
import MusicControl from './components/MusicControl';

function App() {
  const [state, setState] = useState(initialState);

  return (
    <>
      {state.music ? <MusicControl clickHandler={pauseBackgroundSong} setState={setState}>&#9646;&#9646;</MusicControl> : 
      <MusicControl clickHandler={playBackgroundSong} setState={setState}>&#9654;</MusicControl>}
      <h1 className="glow">Sound Control</h1>
      <div className="flex max-width-md center">
        <div className="flex center max-width-sm margin-top anti-rotate">
          {state.gameControls.map((pad, index) => {
            if (index < 4) {
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
            }
          })}
        </div>
        <div className="flex center max-width-sm margin-top rotate">
          {state.gameControls.map((pad, index) => {
            if (index > 3) {
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
            }
          })}
        </div>
      </div>
      {state.gameOver && (
        <div className="flex gap center">
          <p className="glow small-font">Game Over</p>
          <p className="glow small-font">
            Score: {state.gameArray.length - 1}
          </p>
        </div>
      )}

      <div className="flex center margin-top">
        {!state.isPlaying ? (
          <PlayButton
            gameArray={state.gameArray}
            gameControls={state.gameControls}
            setState={setState}
            state={state}
          />
        ) : (
          <ResetButton setState={setState} />
        )}
      </div>
    </>
  );
}

export default App;
