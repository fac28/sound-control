import song from '../assets/background.mp3';

export const backgroundSong = () => {
  const audio = new Audio(song);
  audio.loop = true;
  audio.play();
};
