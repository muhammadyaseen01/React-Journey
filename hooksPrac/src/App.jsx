import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hook from "./Hook.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Hook />
  )
}

export default App
