
export function playSound(currentIndex) {
  audio.src = soundUrls[currentIndex];
  audio.play();
  currentIndex = (currentIndex + 1) % soundUrls.length;
}