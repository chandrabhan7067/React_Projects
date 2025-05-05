import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState('')

  function handleClick(value){
    if(value === '='){
      try{
        setResult(eval(result));
      }
      catch (error) {
        setResult('Error');
      }
    }
    else if(value === 'C'){
      setResult('')
    }
    else if(value == 'DEL'){
      let temp = "";

      for (let i = 0; i < result.length-1; i++) {
        temp += result[i];
        
      }
      
      setResult(temp)
    }
    else{
      setResult(result + value)
    }
  }

  return (
    <div className="calculator">
      <div className='output'>
        <div>{result}</div>
      </div>
      <button onClick={()=>handleClick('1')}>1</button>
      <button onClick={()=>handleClick('2')}>2</button>
      <button onClick={()=>handleClick('3')}>3</button>
      <button onClick={()=>handleClick('/')}>/</button>

      <button onClick={()=>handleClick('4')}>4</button>
      <button onClick={()=>handleClick('5')}>5</button>
      <button onClick={()=>handleClick('6')}>6</button>
      <button onClick={()=>handleClick('*')}>*</button>

      <button onClick={()=>handleClick('7')}>7</button>
      <button onClick={()=>handleClick('8')}>8</button>
      <button onClick={()=>handleClick('9')}>9</button>
      <button onClick={()=>handleClick('-')}>-</button>

      <button onClick={()=>handleClick('.')}>.</button>
      <button onClick={()=>handleClick('0')}>0</button>
      <button onClick={()=>handleClick('+')}>+</button>
      <button onClick={()=>handleClick('DEL')}>DEL</button>

      <button className='span-two'  onClick={()=>handleClick('=')}>=</button>
      <button className='span-two' onClick={()=>handleClick('C')}>C</button>
    </div>

  )
}

export default App
