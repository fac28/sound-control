import './App.css';
import Pad from './components/Pad';
import ControlButton from './components/ControlButton';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    playerArray: [],
    gameArray: []
  })
  return (
    <>
      <h1>Sound Control</h1>
      <div className="flex center">
        <Pad colour={'red'} setState={setState} state={state} />
        <Pad colour={'blue'} setState={setState} state={state} />
        <Pad colour={'green'} setState={setState} state={state} />
        <Pad colour={'yellow'} setState={setState} state={state} />
      </div>
        <div className='flex center gap'>
        <ControlButton control={'play'}/>
        <ControlButton control={'pause'}/>
        </div>
    </>
  );
}

export default App;
