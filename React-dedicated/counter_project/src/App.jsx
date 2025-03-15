import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(44);
  const addValue = ()=>{
    setCounter(counter +1);
  }
  const subvalue = ()=>{
    setCounter(counter -1);
  }

  return (
    <>
      <div>Counter value {counter}</div>
      <button onClick={addValue}>Add value</button>
      <button onClick={subvalue}>Subtract value</button>
    </>
  )
}

export default App
