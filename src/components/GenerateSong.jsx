import { useState } from "react"

export function GenerateSong() {
    const [randomNumbers, setRandomNumbers] = useState([]);
  
    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random()*16)+1
        setRandomNumber([...randomNumbers, randomNumber])
    }
  }

  