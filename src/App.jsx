import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tempapp from "./component/Tempapp";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Tempapp />  
    </>
  )
}

export default App
   