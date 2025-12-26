import { useRef } from "react"
import './App.css'

function App() {
  
  const hexCodes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let hexColor = "#";
  const appRef = useRef(null);

  const backgroundColorChange = () => {
      for(let i=0; i<6; i++){
        hexColor += hexCodes[Math.floor(Math.random()*15)]
      }
      console.log(hexColor)
      appRef.current.style.backgroundColor = hexColor;
      hexColor = "#"
  }

  return (
    <div ref={appRef} className="height center">
        <button className="color-btn" onClick={backgroundColorChange}>Change Color</button>
    </div>
  )
}

export default App
