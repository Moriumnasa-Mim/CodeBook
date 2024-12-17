import { useState } from 'react'
import './App.css'
import Index from './route/index.jsx'

function App() {
  const[count, setCount] = useState(0)

  return (
   
      <div>
       <Index/>
      </div>

  )
}

export default App
