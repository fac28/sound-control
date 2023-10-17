import { startNewRound } from "../utils/startNewRound"

const ControlButton = ({control, gameArray, setState, state}) => {
    
  return (
    <button 
      type="button" 
      className="button"
      onClick={() => startNewRound(gameArray, state, setState)}
    >{control}
    </button>
  )
}

export default ControlButton