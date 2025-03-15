import { useState } from 'react'
//import './App.css'

function App() {
const [color, setColor] = useState("baige");

  return (
    <div className='w-full h-screen duration-1000'
    style={{backgroundColor: color}}
    >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-2xl'>
        <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}
        >RED</button>
         <button onClick={()=> setColor("orange")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "orange"}}
        >ORANGE</button>
         <button onClick={()=> setColor("black")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "black"}}
        >BLACK</button>
      </div>
    </div>

    </div>
  )
}

export default App
