export const handleAnimation = (setState, value) => {
  setState((prevState) => ({
    ...prevState,
    gameControls: prevState.gameControls.map((control) => {
      if (control.index === value) {
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
  }, 1000); // Set the duration of your animation in milliseconds (1 second in this example)
};
