import { handleAnimation } from "../utils/handleAnimation";
const Pad = ({ colour, setState, value, isAnimated }) => {

  const clickHandler = (event) => {

    setState((prevState) => ({
      ...prevState,
      playerArray: [...prevState.playerArray, +event.target.value],
    }));

    handleAnimation(setState, value)
  };
  return <button type="button" className={`pad ${colour} ${isAnimated? 'element-animate' : ''}`} value={value} onClick={clickHandler}></button>;
};

export default Pad;
