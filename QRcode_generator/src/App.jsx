import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState("")
  const [userInput, setUserInput] = useState("")
  const [Error, setError] = useState("")
  const [heightValue, setHeightValue] = useState(0)

  function handleClick(){
    if(userInput == ""){
      setImage("")
      setError("Please enter some value yr")
      setHeightValue(0)
    }
    else{
      setError("");
      let ImgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput;
      setImage(ImgSrc);
      if(window.innerWidth <= 600){
        setHeightValue(100)
      }
      else{
        setHeightValue(150)
      }
    }
  }

  return (
    <>
      <div className="container">
        <input type="text" onChange={(e)=>setUserInput(e.target.value)} placeholder='Enter your input'/>
        <img src= {image} style={{height:`${heightValue}px`}} alt="" />
        <p>{Error}</p>
        <button onClick={handleClick}>Generate</button>
      </div>
    </>
  )
}

export default App
