export const playSong = (gameArray, soundUrlArray) => {
  const interval = 2000;

  let currentIndex = 0;
  let audio = new Audio(soundUrls[currentIndex]);

  // Function to play the sound and update the currentIndex
function playSound() {
  audio.src = soundUrls[currentIndex];
  audio.play();
  currentIndex = (currentIndex + 1) % soundUrls.length;
}

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


