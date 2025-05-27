import Button from '../button/Button'
import Display from '../display/Display'
import useCalculator from '../../hooks/useCalculator'
import './Calculator.css'
const Calculator = () => {
  const { display, inputNumber, inputOperation, calculate, clear } = useCalculator()
  const buttons = ['C', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  const handlers: Record<string, () => void> = { C: clear, '+/-': () => inputOperation('+/-'), '%': () => inputOperation('%'), '÷': () => inputOperation('/'), 'x': () => inputOperation('x'), '-': () => inputOperation('-'), '+': () => inputOperation('+'), '=': calculate, '.': () => inputNumber('.'), ...Object.fromEntries(['0','1','2','3','4','5','6','7','8','9'].map(n => [n, () => inputNumber(n)]))
  }
  return (
    <main>
      <section className='display-container'><Display value={display} /></section>
      <section className='buttons-container'>
        {buttons.map(b => <Button key={b} label={b} onClick={handlers[b]} />)}
      </section>
    </main>
  )
}
export default Calculator
