import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    
      <Background>
        

      </Background>
      <About></About>
      
    </>
  )
}

export default App
