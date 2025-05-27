import Button from '../button/Button'
import Display from '../display/Display'
import useCalculator from '../../hooks/useCalculator'
import './Calculator.css'

const Calculator = () => {
  const { display, inputNumber, inputOperation, calculate, clear } = useCalculator()

  return (
    <>
      <main>
        <section className='display-container'>
          <Display value={ display }/>
        </section>
        <section className='buttons-container'>
          <Button label='C' onClick={ clear }/>
          <Button label='+/-' onClick={()=>{ inputOperation('+/-') }}/>
          <Button label='%' onClick={()=>{ inputOperation('%') }}/>
          <Button label='÷' onClick={()=>{ inputOperation('/') }}/>
          <Button label='7' onClick={()=>{ inputNumber('7') }}/>
          <Button label='8' onClick={()=>{ inputNumber('8') }}/>
          <Button label='9' onClick={()=>{ inputNumber('9') }}/>
          <Button label='x' onClick={()=>{ inputOperation('x') }}/>
          <Button label='4' onClick={()=>{ inputNumber('4') }}/>
          <Button label='5' onClick={()=>{ inputNumber('5') }}/>
          <Button label='6' onClick={()=>{ inputNumber('6') }}/>
          <Button label='-' onClick={()=>{ inputOperation('-') }}/>
          <Button label='1' onClick={()=>{ inputNumber('1') }}/>
          <Button label='2' onClick={()=>{ inputNumber('2') }}/>
          <Button label='3' onClick={()=>{ inputNumber('3') }}/>
          <Button label='+' onClick={()=>{ inputOperation('+') }}/>
          <Button label='0' onClick={()=>{ inputNumber('0') }}/>
          <Button label=' ' onClick={()=>{}}/>
          <Button label='.' onClick={()=>{ inputNumber('.') }}/>
          <Button label='=' onClick={ calculate }/>
        </section>
      </main>
    </>
  )
}

export default Calculator
