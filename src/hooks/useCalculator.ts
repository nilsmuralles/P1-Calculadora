import { useState } from "react"

const useCalculator = () => {
  const [display, setDisplay] = useState('0')

  const inputNumber = (number: string) => {
    if (display.length < 9) {
      setDisplay(display === '0' ? number : display + number)
    }
  }

  return { display, inputNumber }
}

export default useCalculator
