import { useState } from "react";

const Pad = ({ colour, setState, state }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  const clickHandler = (event) => {

    setState((prevState) => ({
      ...prevState,
      playerArray: [...prevState.playerArray, event.target.value],
    }));
    
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000); 
    
  };
  return <button type="button" className={`pad ${colour} ${isAnimated? 'element-animate' : ''}`} value={colour} onClick={clickHandler}></button>;
};

export default Pad;
