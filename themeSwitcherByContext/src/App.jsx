import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index'

function App() {

  return (
    <>
      <h1 className='p-4 bg-pink-600 text-3xl text-white'>Currency Converter</h1>
      <InputBox />
    </>
  )
}

export default App
