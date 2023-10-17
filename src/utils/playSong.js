const gameArray = [1, 4, 3, 2, 4, 1];


export const playSong = (gameArray, soundUrlArray) => {
  const interval = 2000;

  let currentIndex = 0;

  //Make sure the is no interval
  if (currentIndex >= gameArray.length) {

    // Clear the interval
    clearInterval(intervalId);
  }

// Start the loop
const intervalId = setInterval(playSound, interval);

}


// Sample array of sound file URLs
const soundUrls = [
  'sound1.mp3',
  'sound2.mp3',
  'sound3.mp3'
];

  // Function to play the sound and update the currentIndex
  function playSound(gameControls) {
    gameArray.forEach((pad, index) => {
      if(pad === gameControls.index) {
        
      }
    })
    
    // let audio = new Audio(soundUrls[currentIndex]);
  // audio.src = soundUrls[currentIndex];
  // audio.play();
  // currentIndex = (currentIndex + 1) % soundUrls.length;
}

