import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-amber-950 text-amber-300 p-4 rounded-2xl'>Am I Audible</div>
    </>
  )
}

export default App
