import song from '../assets/background.mp3';

const audio = new Audio(song);

export const playBackgroundSong = (setState) => {
  audio.loop = true;
  audio.play();

  setState((prevState) => ({
    ...prevState,
    music: true,
  }));
};

export const pauseBackgroundSong = (setState) => {
  audio.pause()

  setState((prevState) => ({
    ...prevState,
    music: false,
  }));
}
