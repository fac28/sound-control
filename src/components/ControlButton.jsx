import { animateGameArray } from "../utils/animateGameArray"

const ControlButton = ({control, gameArray, gameControls, setState}) => {
    
  return (
    <button 
      type="button" 
      className="button"
      onClick={() => animateGameArray(gameArray, setState)}
    >{control}
    </button>
  )
}

export default ControlButton