import Button from '../button/Button'
import Display from '../display/Display'
import './Calculator.css'

const Calculator = () => {
  return (
    <>
      <main>
        <section className='display-container'>
          <Display />
        </section>
        <section className='buttons-container'>
          <Button label='C' onClick={()=>{}}/>
          <Button label='+/-' onClick={()=>{}}/>
          <Button label='%' onClick={()=>{}}/>
          <Button label='/' onClick={()=>{}}/>
          <Button label='7' onClick={()=>{}}/>
          <Button label='8' onClick={()=>{}}/>
          <Button label='9' onClick={()=>{}}/>
          <Button label='X' onClick={()=>{}}/>
          <Button label='4' onClick={()=>{}}/>
          <Button label='5' onClick={()=>{}}/>
          <Button label='6' onClick={()=>{}}/>
          <Button label='-' onClick={()=>{}}/>
          <Button label='1' onClick={()=>{}}/>
          <Button label='2' onClick={()=>{}}/>
          <Button label='3' onClick={()=>{}}/>
          <Button label='+' onClick={()=>{}}/>
          <Button label='0' onClick={()=>{}}/>
          <Button label=' ' onClick={()=>{}}/>
          <Button label='.' onClick={()=>{}}/>
          <Button label='=' onClick={()=>{}}/>
        </section>
      </main>
    </>
  )
}

export default Calculator
