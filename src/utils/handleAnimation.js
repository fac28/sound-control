

export const handleAnimation = (setState, value) => {
  setState((prevState) => ({
    ...prevState,
    gameControls: prevState.gameControls.map((control) => {
      if (control.index === value) {
        control.sound.play();
        return { ...control, isAnimated: true };
      }
      return control;
    }),
  }));

  setTimeout(() => {
    setState((prevState) => ({
      ...prevState,
      gameControls: prevState.gameControls.map((control) => {
        if (control.index === value) {
          return { ...control, isAnimated: false };
        }
        return control;
      }),
    }));
  }, 500);
};
