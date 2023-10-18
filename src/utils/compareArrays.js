
export const compareArrays = (playerArray, gameArray,) => {

  
    for (let i = 0; i < playerArray.length; i++) {
      if (playerArray[i] !== gameArray[i]) {
        // If there's a mismatch at any index, the game should end
        return false;
      }
    }
  
    // If all elements match, the player successfully copied the sequence
    return true;
  };
  