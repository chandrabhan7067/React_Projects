import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [BMI, setBMI] = useState()
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [msg, setMsg] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    console.log("submitted") 
    let bmi = (weight/(height*height));
    setBMI(bmi.toFixed(1))

    if(height == "" && weight == ""){
      setMsg("Enter valid number")
    }
    else{
      if(bmi < 18){
        setMsg("underweight")
      }
      else if(bmi >= 18 && bmi < 24){
        setMsg("Fit person")
      }
      else{
        setMsg("Overweight")
      }
    }
    
  }

  function resetValue(e){
    e.preventDefault()
    setBMI("")
    setMsg("")
    setHeight("")
    setWeight("")
  }

  return (
    <div className='bg-blue-400 h-screen flex justify-center items-center'>
      <form type="submit" className="box h-96 w-96 flex flex-col gap-3 bg-green-400 justify-center drop-shadow-2xl">
          <div className="inputs flex flex-col gap-2 justify-center items-center">
            <input className='rounded-sm h-10 p-3 w-80' type="text" placeholder='Enter your height in meter' value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
            <input className='rounded-sm h-10 p-3 w-80' type="text" placeholder='Enter you weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
          </div>
          
          <div className="btns flex justify-evenly">
            <button className='bg-white h-8 w-16 rounded-sm'   onClick={handleSubmit}>submit</button>
            <button className='bg-white h-8 w-16 rounded-sm' onClick={resetValue}>Reset</button>
          </div>
          
          <p className='text-white mx-3'>Your BMI: {BMI}</p>
          <p className='text-white mx-3'>You are: {msg}</p>
      </form>
    </div>
  )
}

export default App
