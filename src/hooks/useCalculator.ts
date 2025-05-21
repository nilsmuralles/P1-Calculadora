import { useState } from "react"

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState<string | null>(null)
  const [previous, setPrevious] = useState<number | null>(null)
  const [overrideNext, setOverride] = useState(false)

  const inputNumber = (number: string) => {
    if (overrideNext) {
      setDisplay(number)
      setOverride(false)
      return
    }
    if (display.length < 9) {
      setDisplay(display === '0' ? number : display + number)
    }
  }

  const inputOperation = (operation: string) => {
    setOperation(operation)
    setPrevious(Number(display))
    setOverride(true)
  }

  const calculate = () => {
    if (previous === null || operation === null) return
    const current = Number(display)
    let result: number

    switch (operation) {
      case '+': result = previous + current; break
      case '-': result = previous - current; break
      case 'x': result = previous * current; break
      default: result = current
    }

    if (result < 0 || result > 999999999) {
      setDisplay('ERROR')
      setOverride(true)
    } else {
      setDisplay(String(result))
      setPrevious(result)
    }
    setOperation(null)
  }

  const clear = () => {
    setDisplay('0')
    setPrevious(null)
    setOperation(null)
    setOverride(false)
  }

  return { display, inputNumber, inputOperation, calculate, clear }
}

export default useCalculator
